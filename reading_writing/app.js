const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        // Render form
        res.setHeader("Content-Type", "text/html");
        res.end(`
            <form action="/message" method="POST"> 
                <label>Name :</label>
                <input type="text" name="username">
                <button type="submit">Add</button>
            </form>
        `);
    } else if (url === "/message" && method === "POST") {
        let datachunks = [];

        req.on("data", (chunk) => {
            console.log(chunk);
            datachunks.push(chunk);
        });

        req.on("end", () => {
            let buffer = Buffer.concat(datachunks);
            console.log(buffer);
            let formData = buffer.toString();
            console.log(formData);
            const formValues = formData.split("=")[1];

            fs.writeFile("formValues.txt", formValues, (err) => {
                if (err) {
                    console.error("Error writing file:", err);
                    res.statusCode = 500;
                    res.end("Internal Server Error");
                    return;
                }
                res.statusCode = 302;
                res.setHeader("Location", "/");
                res.end();
            });
        });
    } else if (url === "/read") {
        fs.readFile("formValues.txt", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                res.statusCode = 500;
                res.end("Internal Server Error");
                return;
            }
            res.setHeader("Content-Type", "text/html");
            res.end(`<h1>${data.toString()}</h1>`);
        });
    } else {
        res.statusCode = 404;
        res.end("404 Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const fs = require("fs");
const requesthandler=(req,res)=> {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        // Read messages from the file
        fs.readFile("formValues.txt", "utf-8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                data = ""; // If the file does not exist or is empty
            }

            // Render messages and form
            res.setHeader("Content-Type", "text/html");
            res.end(`
                <h2>Messages:</h2>
                <p>${data.replace(/\n/g, "<br>")}</p>
                <form action="/message" method="POST"> 
                    <label>Name :</label>
                    <input type="text" name="username">
                    <button type="submit">Add</button>
                </form>
            `);
        });
    } else if (url === "/message" && method === "POST") {
        let datachunks = [];

        req.on("data", (chunk) => {
            datachunks.push(chunk);
        });

        req.on("end", () => {
            let buffer = Buffer.concat(datachunks);
            let formData = buffer.toString();
            const formValue = formData.split("=")[1] || "";

            // Read existing messages
            fs.readFile("formValues.txt", "utf-8", (err, data) => {
                if (err) data = ""; // If file does not exist, start fresh

                // Add new message at the top
                const updatedData = decodeURIComponent(formValue) + "\n" + data;

                fs.writeFile("formValues.txt", updatedData, (err) => {
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
        });
    } else {
        res.statusCode = 404;
        res.end("404 Not Found");
    }
};

const anotherfunction=()=>{console.log("another function here!")}
// module.exports={requesthandler,anotherfunction}; method 2
module.exports={func1:requesthandler,func2:anotherfunction}
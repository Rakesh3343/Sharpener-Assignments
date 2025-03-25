const http = require("http");
const routes=require("./routes")
routes.func2()

const server = http.createServer(routes.func1);

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

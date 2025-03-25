const http = require("http");
const routes=require("./routes")
routes.anotherfunction()

const server = http.createServer(routes.requesthandler);

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

const http = require('http');
const server = http.createServer((req,res)=>{console.log("server is created");
    res.setHeader('Content-Type','text/html');
    if(req.url=='/'){
        res.statusCode=200;
        res.end("<h1>Hello World!</h1>")
    }
//  When url = /home , return response as 'Welcome home'
// When url = /about, return response as 'Welcome to About Us'
// When url =/node, return response as 'Welcome to my Node Js project'
// When url is anything else expect '/home,/about,/node' return 'Page Not Found' 
    else{
        if(req.url=='/home'){
            res.statusCode=200;
            res.end("<h1>Welcome home</h1>")
        }
        else if(req.url=='/about'){
            res.statusCode=200;
            res.end("<h1>Welcome to About Us</h1>")
        }
        else if(req.url=='/node'){
            res.statusCode=200;
            res.end("<h1>Welcome to my Node Js project</h1>")
        }
        else{
            res.statusCode=404;
            res.end('<h1>Page not found</h1>')
        }
    }
})
let port=3000;
server.listen(port,()=>{console.log("server is running")})

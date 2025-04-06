// learning middlewares
const express = require('express');
const app = express();
const PORT = 3000;

// middleware 1 for routing
app.use((req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ---- ${req.method} ---- ${req.url}`)
})

app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)})
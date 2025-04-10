const express = require('express');
const app = express();
const orderRouter = require("./routes/orders")
const userRouter = require("./routes/users")

// app.get("/orders",(req,res)=>{
//     res.send('Order List')
// })
// app.post("/orders",(req,res)=>{
//     res.send("Order Created")
// })
app.use("/orders",orderRouter)
// app.get("/users",(req,res)=>{
//     res.send('Order List')
// })
// app.post("/users",(req,res)=>{
//     res.send("Order Created")
// })
app.use("/users",userRouter)

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
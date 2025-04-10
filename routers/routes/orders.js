const express = require('express');
const router = express.Router();

router.get("/orders",(req,res)=>{
    res.send('Order List')
})
router.post("/orders",(req,res)=>{
    res.send("Order Created")
})

module.exports=router
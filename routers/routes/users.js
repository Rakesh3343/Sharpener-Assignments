const express = require('express');
const router = express.Router();

router.get("/users",(req,res)=>{
    res.send('User List')
})
router.post("/users",(req,res)=>{
    res.send("User Created")
})

module.exports=router
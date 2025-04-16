const express = require('express');
const router = express.Router();

// GET /users - Will fetch all users.
router.get('/',(req,res)=>{
    res.send("Fetching all users")
})

router.post('/',(req,res)=>{
    res.send("Adding a new user")
})

router.get('/:id',(req,res)=>{
    res.send(`Fetching product with ID ;${req.params.id}`)
})

module.exports=router;
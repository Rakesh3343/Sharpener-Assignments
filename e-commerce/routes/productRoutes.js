const express = require('express');
const router = express.Router();

// fetching all the products using get request
router.get('/',(req,res)=>{
    res.send('Fetching All the products')
})

// Adding a new product
router.post('/',(req,res)=>{
    res.send('Adding a new product')
})

//Fetching a product
router.get('/:id',(req,res)=>{
    res.send(`Fetching product with ID:${req.params.id}`)
})

module.exports=router;
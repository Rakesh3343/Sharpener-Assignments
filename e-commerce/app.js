const express = require('express');
const app = express();
const PORT=3000;

//Importing route files here
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')

//Middleware
app.use(express.json());

//Using the routes
app.use('/users',userRoutes);
app.use('/products',productRoutes);
app.use('/cart',cartRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
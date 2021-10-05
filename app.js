const express=require('express');
const customerRoutes=require('./routes/customer.js')
const app=express();
app.use(express.json());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*"); // allow cors for all clients
    res.setHeader("Access-Control-Allow-Methods",'GET,POST,PUT,DELETE'); //allow clients to use these methods on our API
    next();
})
app.use('/api/customers',customerRoutes); //if there is a request that starts with 'api/customers', route it to customerRoutes



app.listen(3002);
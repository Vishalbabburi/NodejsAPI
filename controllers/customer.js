const Customer=require('../ModelDAO/CustomerDao.js') //Capital letter as we are importing a Class

//fetch all the customers
exports.getCustomers=(req,res,next)=>{
   Customer.findAll() //coz this method returns a promise
    .then((results)=>{
    res.status(200)
        .json({customers:results[0]})
    })
    .catch((err)=>{
        if(!err.statusCode) err.statusCode=500;
        next(err);
    });
}

//fetch customer by id 
exports.findCustomerById=(req,res,next)=>{
    const id=req.params.id;
    Customer.findById(id) //coz this method returns a promise
     .then((results)=>{
     res.status(200)
         .json(results[0][0])
     })
     .catch((err)=>{
         if(!err.statusCode) err.statusCode=500;
         next(err);
     });
     
 }

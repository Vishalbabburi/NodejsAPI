const express=require('express')
const customerController=require('../controllers/customer')
const router=express.Router();

// GET:api/customers/getAllCustomers
router.get('/getAllCustomers',customerController.getCustomers);

router.get('/findById/:id',customerController.findCustomerById)
module.exports=router;
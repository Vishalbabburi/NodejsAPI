const mysql=require('mysql2');

const pool=mysql.createPool({
    connectionLimit:10,
    host:"localhost",
    user:"hbstudent",
    database:"indiabazar",
    password:"hbstudent"
})

if(pool){
    console.log('connection sucess');
    pool.execute(`SELECT * from customer`)
}

module.exports=pool.promise();
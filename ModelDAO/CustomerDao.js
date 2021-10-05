const dbPool=require('../util/db.js')
module.exports= class Customer{
    constructor(id,first,homephone,last,mobile,office_email,personal_email,status){
        this.id=id;
        this.first=first;
        this.homephone=homephone;
        this.last=last;
        this.mobile=mobile;
        this.office_email=office_email;
        this.personal_email=personal_email;
        this.status=status;
    }

    
    static findAll(){
       return dbPool.execute('SELECT * FROM customer') //will return a promise
    }

    static findById(id){
        console.log("entered find by id, with id "+id)
        return dbPool.execute(`SELECT * FROM customer WHERE id=?`,[id])
    }

}
//used to export the data  into the database 

const mongoose  =  require('mongoose');
const dotenv = require('dotenv');
const Users  = require('./data/users');
const User  = require('./models/user');
const product  = require('./models/productModels');
const order  = require('./models/orderModels');
const products = require('./data/products');
const connectdb = require('./config/config(mongo)');
dotenv.config();
connectdb();

const importdata = async () =>{
    try{
        
        await User.deleteMany()
        await product.deleteMany()
        await order.deleteMany()
    
        const creatUser = await User.insertMany(Users);

        const adminUser = creatUser[0]._id ;

        const sampleData  = products.map(items => {
            return {...items  , User:adminUser}
        })

        await product.insertMany(sampleData);
        console.log("dataimported".yellow.inverse)
        process.exit()
    }catch(error){
        console.error(`the  erorr  is : ${error} !! failed to import data`.yellow.inverse);
    }
  
}

const  dataDestroy = async () => {
 
   try{
    await  User.deleteMany();
    await  product.deleteMany();
    await  order.deleteMany();
    console.log("datadeleted".grey.inverse);
   }catch(error){
     console.error(`error ${error}`.yellow.inverse);
     process.exit()
   }
}


if(process.argv[2] === "-d"){
    dataDestroy();
}
else{
    importdata();
}



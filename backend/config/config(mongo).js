const { inverse , red} = require('colors');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config();
const connectdb = async () => {
    try {
        const conn =  await  mongoose.connect("mongodb://127.0.0.1:27017/shopping", { 
            // useNewUrlParser: true, 
            // useUnifiedTopology: true
          }); 
        console.log(`Database connected to ${conn.connection.host}`.green.inverse);
    } catch (error) {
        console.error(`There is an issue in connecting to the database: ${error.message}`.red.inverse);
        process.exit(1);
    }
};

module.exports = connectdb;

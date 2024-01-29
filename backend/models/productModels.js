const mongoose  = require('mongoose')


const reviewSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    
    comments:{
        type: String,
        required:true
    }

}, {timeStamps:true})
const productSchema = mongoose.Schema({
    User:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true,

    }
    ,
    image:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true,
    },

    reviews:[reviewSchema],
    
    rating:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    numReviews:{
        type:Number,
        // required:true
    },
    countInStock:{
        type:Number,
        // required:true
    },
})

const Product =  mongoose.model('Product', productSchema);

module.exports= Product

const mongoose=require('mongoose');

const CVSchema=new mongoose.Schema({
    title:String,
    description:String,
    url:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const CVModel=mongoose.model('CV',CVSchema);

module.exports=CVModel;
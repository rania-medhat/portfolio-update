const mongoose=require('mongoose');

const projectSchema=new mongoose.Schema({
    title:String,
    link:String,
    image:String,
    category:{
        type:String,
        enum:['React','Angular','ASP.Net','Node.js','MEAN Stack']
    }
})

const projectModel=mongoose.model('Projects',projectSchema);

module.exports=projectModel;
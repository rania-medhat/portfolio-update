const CV=require('../Models/CV');

async function getAllCVs(res){
    const CVs=await CV.find();
    res.json(CVs);
}

//get specific cv
async function getCVById(req,res){
    const id=req.params.id;
    const myCV=await CV.findById(id);
    res.json(myCV);
}

//admin add cv
async function createCV(req,res){
    const myData=req.body;
    const newCVs=CV.create(myData);
    res.json(newCVs);

}

module.exports={getAllCVs,getCVById,createCV}
const express=require('express')
const router=express.Router();
const {getAllCVs,getCVById,createCV}=require('../Functions/CV.Function');

router.get('/',(req,res)=>{
    getAllCVs(res);
});
router.get('/category',(req,res)=>{
    getCVById(req,res);
});
router.post('/',(req,res)=>{
    createCV(req,res);
})

module.exports=router;
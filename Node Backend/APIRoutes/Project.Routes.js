const express=require('express');
const router=express.Router();
const {getProjects,addProject,getProjectByCategory,deleteProject}=require('../Functions/Project.Function');
const upload = require('../MiddleWares/Upload.MiddleWare');

router.get('/',(req,res)=>{
    getProjects(req,res);
});

router.get('/:category',(req,res)=>{
    getProjectByCategory(req,res);
});

router.post('/',upload.single('img'),(req,res)=>{
    addProject(req,res);
})

router.delete('/:title',(req,res)=>{
    deleteProject(req,res);
})

module.exports=router;
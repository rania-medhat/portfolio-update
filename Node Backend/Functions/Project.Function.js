
const Project=require('../Models/Project');

//get projects and filter
async function getProjects(req,res){
    const Category=req.query.category;
    const Projects=Category?
    await Project.find({ category:Category}):
    await Project.find();
    res.json(Projects);
}

async function getProjectByCategory(req,res){
    const category=req.params.category;
    const project=await Project.find({category:category});
    res.json(project);
}

//admin add project
async function addProject(req,res){
    const insertedData=req.body;

 if(req.file) {
    // insertedData.image = req.file.filename; // أو المسار الكامل لو عايز

    insertedData.image = `http://localhost:8000/uploads/${req.file.filename}`;

  }

    const newProjects=await Project.create(insertedData);
        
    res.status(200).json(newProjects);
        

}

async function deleteProject(req,res){
    const title=req.params.title;
    const project=await Project.deleteOne({title:title});
    res.status(200).json(project);
}

module.exports={getProjects,addProject,getProjectByCategory,deleteProject};
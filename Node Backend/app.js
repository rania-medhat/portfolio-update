//npm init -y
//npm install express
//mongod
//npm i express mongoose
//npm i nodemon
//npm start
const express=require('express');
const mongoose=require('mongoose');
const projectRoutes=require('./APIRoutes/Project.Routes');
const CVRoutes=require('./APIRoutes/CV.Routes');
const contactRoutes=require('./APIRoutes/Contact.Routes');
const cors = require('cors');
const path=require('path')

const app=express();
const port=8000;
app.listen(port, () => console.log("Server running"));

app.use(express.json());
app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/projects',projectRoutes);
app.use('/api/cvs',CVRoutes);
app.use("/api/messages",contactRoutes);

mongoose.connect('mongodb://localhost:27017/portfolio')
.then(()=>console.log("mongo connected"));

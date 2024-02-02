
const Project = require("../models/Project")
const index = async(req,res) =>{
    try{
        const projects = await Project.showall()
        res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
        res.status(200).json(projects)

    }
    catch(e){
        res.status(404).json({error: e.message})
    }
}

const create = async(req,res) =>{
    try{
        const project_data = req.body
        const result = await Project.create(project_data)

        res.status(201).json(result)


    }
    catch(e){
        res.status(400).json({error: e.message})
    }
}


module.exports = { index, create }

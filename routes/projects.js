const Router = require("express")

const projectController = require("../controllers/projects")

const ProjectRouter = Router()

ProjectRouter.get("/", projectController.index)
ProjectRouter.post("/", projectController.create)


module.exports = ProjectRouter;

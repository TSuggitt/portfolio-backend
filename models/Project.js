const db = require("../database/connection")
class Project{
    constructor(project_id, title, description,img_url1, img_url2 ){
        this.project_id = project_id;
        this.title = title;
        this.description = description;
        this.img_url1 = img_url1;
        this.img_url2 = img_url2;

    }

    static async showall() {
        const response = await db.query("SELECT * FROM projects;");
        return response.rows.map(p => new Project(p.project_id, p.title, p.description, p.img_url1, p.img_url2));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM projects WHERE project_id = $1;", [id]);
        if (response.rows.length != 1) {
            throw new Error("Cannot locate booking")
        }
        return new Project(response.rows[0]);
    }

    static async create(data){
        const { title, description, img_url1, img_url2 } = data
        const response = await db.query("INSERT INTO projects (title, description, img_url1, img_url2) VALUES($1,$2,$3,$4);", [title, description, img_url1, img_url2])

        const id = response.rows[0].project_id
        const newProject = await Project.getOneById(id)
        return newProject


        
    }
}

module.exports = Project

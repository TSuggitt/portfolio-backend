DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    project_id INT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(50) NOT NULL, 
    description VARCHAR(200) NOT NULL, 
    img_url1 VARCHAR(200) NOT NULL, 
    img_url2 VARCHAR(200) NOT NULL,
    PRIMARY KEY (project_id)
);

--insert into tables will be placed below once the screenshots are taken - weekend job 

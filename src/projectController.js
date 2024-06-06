import project from "./project";
import { nanoid } from "nanoid";

export default function projectController() {
    let projects = [];

    const createProject = (name) => {
        const id = nanoid();
        const newProject = project(id, name);
        projects = [...projects, newProject];
    };

    const removeProject = (id) => {
        projects = projects.filter((project) => project.id !== id);
    };

    const printProjects = () => {
        projects.forEach((project) => {
            console.log(project);
        });
    };

    const editProjectName = (id, newName) => {
        projects = projects.map((project) => {
            project.id === id ? { ...project, name: newName } : project;
        });
    };

    return { createProject, printProjects, removeProject, editProjectName };
}

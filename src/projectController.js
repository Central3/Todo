import { nanoid } from "nanoid";
import project from "./project";

export default function projectController() {
    let projects = [];

    const getProjects = () => {
        return projects;
    };

    const getProject = (id) => {
        const found = projects.find((project) => project.name === id);
        return found;
    };

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

    return {
        getProjects,
        createProject,
        printProjects,
        removeProject,
        editProjectName,
        getProject,
    };
}

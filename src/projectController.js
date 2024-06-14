import { nanoid } from "nanoid";
import project from "./project";

let projects = [];

export const getProjects = () => projects;

export const getProjectById = (id) => {
    const found = projects.find((project) => project.id === id);
    return found;
};

export const getProjectByName = (name) => {
    const found = projects.find((project) => project.name === name);
    return found;
};

export const createProject = (name) => {
    const id = nanoid();
    const newProject = project(id, name);
    projects = [...projects, newProject];
};

export const removeProject = (id) => {
    projects = projects.filter((project) => project.id !== id);
};

export const printProjects = () => {
    projects.forEach((project) => {
        console.log(project);
    });
};

export const editProjectName = (id, newName) => {
    projects = projects.map((project) => {
        project.id === id ? { ...project, name: newName } : project;
    });
};

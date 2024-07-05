import { nanoid } from "nanoid";
import project from "./project";
import store from "./storage";

const storage = store();
let projects = [];

export const getProjects = () => projects;

export const loadProjects = () => {
    const storedProjects = storage.getItem("projects");

    if (storedProjects) {
        const parsedProjects = JSON.parse(storedProjects);
        projects = parsedProjects.map((item) => {
            const proj = project(item.id, item.name);
            item.tasks.forEach((task) =>
                proj.addTask(
                    task.title,
                    task.desc,
                    task.dueDate,
                    task.priority,
                    task.done,
                    task.id
                )
            );
            return proj;
        });
    }
};

loadProjects();

export const saveProjects = () => {
    const serializeProjects = projects.map((item) => ({
        id: item.id,
        name: item.name,
        tasks: item.getTasks().map((task) => ({
            id: task.id,
            title: task.title,
            desc: task.desc,
            dueDate: task.dueDate,
            priority: task.priority,
            done: task.done,
        })),
    }));
    storage.storeItem("projects", JSON.stringify(serializeProjects));
};

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

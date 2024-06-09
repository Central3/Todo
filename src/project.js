import task from "./task";
import { nanoid } from "nanoid";

export default function project(id, name) {
    const tasks = [];

    function addTask(title, desc, dueDate, priority, done) {
        const id = nanoid();
        const newTask = task(id, title, desc, dueDate, priority, done);
        tasks.push(newTask);
    }

    function deleteTask(id) {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        tasks.splice(0, tasks.length, ...updatedTasks);
    }

    function printTasks() {
        tasks.forEach((task) => {
            console.log(task);
        });
    }

    function getTasks() {
        return tasks;
    }

    return { id, name, addTask, deleteTask, printTasks, getTasks };
}

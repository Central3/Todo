import task from "./task";
import { nanoid } from "nanoid";

export default function project(id, name) {
    const tasks = [];

    function addTask(title, desc, dueDate, priority, done, id) {
        if (!id) id = nanoid();

        let parsedDueDate = new Date(dueDate);
        if (isNaN(parsedDueDate.valueOf())) parsedDueDate = "";

        const newTask = task(id, title, desc, parsedDueDate, priority, done);
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

    function clearTasks() {
        tasks.splice(0);
    }

    function getTasks() {
        return tasks;
    }

    return { id, name, addTask, deleteTask, printTasks, getTasks, clearTasks };
}

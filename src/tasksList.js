import task from "./task";
import { nanoid } from "nanoid";

export default function tasksList() {
    const tasks = [];

    function addTask(title, desc, dueDate, priority, done) {
        if (!title) {
            console.error("Provide Title");
            return;
        }
        if (!dueDate) {
            console.error("Provide Due date");
            return;
        }

        const parsedDueDate = new Date(dueDate);
        if (isNaN(parsedDueDate)) {
            console.error("Date not in correct format");
        }

        const id = nanoid();
        const newTask = task(id, title, desc, parsedDueDate, priority, false);
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

    return { addTask, deleteTask, printTasks, getTasks };
}

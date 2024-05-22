import task from "./task";
import { nanoid } from "nanoid";

export default function tasksList() {
    const tasks = [];

    function addTask(title, desc, dueDate, priority, notes, checklist) {
        const id = nanoid();
        const newTask = task(
            id,
            title,
            desc,
            dueDate,
            priority,
            notes,
            checklist
        );

        if (title === "") {
            console.error("Provide Title");
            return;
        }
        if (dueDate === "") {
            console.error("Provide Due date");
            return;
        }

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

    return { addTask, deleteTask, printTasks };
}
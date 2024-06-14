import "animate.css";
import {
    getProjectById,
    getProjectByName,
    printProjects,
} from "./projectController";

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".btn-close");
const addBtn = document.querySelector("#add");
const form = document.querySelector(".add-task");
const mainDisplay = document.querySelector("#main-display");
const modalOverlay = document.querySelector(".overlay");
const defaultProjectsList = document.querySelector(".default-projects");

export default function UIController() {
    const [title, description, dueDate, priority] = form.elements;
    const allTasks = getProjectByName("All");
    const todayTasks = getProjectByName("Today");
    const defaultProjects = [allTasks, todayTasks];
    let selectedProject = allTasks;

    const openModal = function () {
        modal.classList.remove("hidden", "animate__zoomOut");
        modal.classList.add("animate__zoomIn");
        modalOverlay.classList.remove("hidden");
        title.focus();
    };

    const closeModal = function () {
        form.reset();

        modal.classList.remove("animate__zoomIn");
        modal.classList.add("animate__zoomOut");
        modalOverlay.classList.add("hidden");

        modal.addEventListener("animationend", function handler() {
            modal.classList.add("hidden");

            modal.removeEventListener("animationend", handler);
        });
    };

    const handleSubmit = function (event) {
        event.preventDefault();

        allTasks.addTask(
            title.value,
            description.value,
            dueDate.value,
            priority.value
        );

        closeModal();
        updateScreen();
    };

    const displayTasks = function () {
        mainDisplay.textContent = "";

        selectedProject.getTasks().forEach((task) => {
            const taskBox = document.createElement("div");
            const titleElement = document.createElement("p");
            const descriptionElement = document.createElement("p");
            const dueDateElement = document.createElement("p");
            const contentContainer = document.createElement("div");
            const checkboxContainer = document.createElement("div");
            const checkbox = document.createElement("input");

            taskBox.classList.add("task-container");

            titleElement.textContent = task.title;
            titleElement.classList.add("task-title");
            descriptionElement.textContent = task.desc;
            descriptionElement.classList.add("task-description");

            if (task.dueDate)
                dueDateElement.innerHTML = `Due: ${task.dueDate.toLocaleDateString(
                    "en-GB"
                )}`;
            dueDateElement.classList.add("due");

            checkbox.setAttribute("type", "checkbox");
            checkbox.checked = task.done;
            checkbox.classList.add("done-status");

            checkbox.addEventListener("change", () => {
                task.done = checkbox.checked;
                console.log(task);
            });

            checkboxContainer.appendChild(checkbox);
            contentContainer.appendChild(titleElement);
            contentContainer.appendChild(descriptionElement);
            contentContainer.appendChild(dueDateElement);
            taskBox.appendChild(checkboxContainer);
            taskBox.appendChild(contentContainer);

            mainDisplay.appendChild(taskBox);
        });
    };

    const displayDefaultProjects = function () {
        defaultProjectsList.textContent = "";

        defaultProjects.forEach((project) => {
            const container = document.createElement("div");
            container.textContent = project.name;
            container.setAttribute("data-project-id", `${project.id}`);
            container.classList.add("project");

            defaultProjectsList.appendChild(container);
        });
    };

    const updateTodayList = () => {
        const today = new Date();
        todayTasks.clearTasks();
        allTasks.getTasks().forEach((task) => {
            if (
                task.dueDate &&
                task.dueDate.toDateString() === today.toDateString()
            ) {
                todayTasks.addTask(
                    task.title,
                    task.desc,
                    task.dueDate,
                    task.priority,
                    task.done,
                    task.id
                );
                console.log(todayTasks.getTasks());
            }
        });
    };

    const selectDefaultProject = (event) => {
        if (event.target.classList.contains("project")) {
            selectedProject = getProjectById(event.target.dataset.projectId);
            displayTasks();
        }
    };

    const updateScreen = function () {
        displayTasks();
        displayDefaultProjects();
        updateTodayList();
        // mainDisplay.classList.toggle("hidden", list.getTasks().length === 0);
    };

    closeBtn.addEventListener("click", closeModal);
    addBtn.addEventListener("click", openModal);
    form.addEventListener("submit", handleSubmit);
    defaultProjectsList.addEventListener("click", selectDefaultProject);

    // Initial screen update
    updateScreen();
}

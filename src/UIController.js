import tasksList from "./tasksList";
import "animate.css";

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".btn-close");
const addBtn = document.querySelector("#add");
const form = document.querySelector(".add-task");
const mainDisplay = document.querySelector("#main-display");

export default function UIController() {
    const [title, description, dueDate, priority] = form.elements;

    const list = tasksList();

    const openModal = function () {
        modal.classList.remove("hidden");
        modal.classList.remove("animate__zoomOut");
        modal.classList.add("animate__zoomIn");
        title.focus();
    };

    const closeModal = function () {
        form.reset();

        modal.classList.remove("animate__zoomIn");
        modal.classList.add("animate__zoomOut");

        modal.addEventListener("animationend", function handler() {
            modal.classList.add("hidden");

            modal.removeEventListener("animationend", handler);
        });
    };

    const handleSubmit = function (event) {
        event.preventDefault();

        list.addTask(
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

        list.getTasks().forEach((task) => {
            const taskBox = document.createElement("div");
            const title = document.createElement("p");
            const description = document.createElement("p");
            const contentContainer = document.createElement("div");
            const checkboxContainer = document.createElement("div");
            const checkbox = document.createElement("input");

            taskBox.classList.add("task-container");

            title.textContent = task.title;
            description.textContent = task.desc;
            checkbox.setAttribute("type", "checkbox");

            checkboxContainer.appendChild(checkbox);
            contentContainer.appendChild(title);
            contentContainer.appendChild(description);
            taskBox.appendChild(checkboxContainer);
            taskBox.appendChild(contentContainer);

            mainDisplay.appendChild(taskBox);
        });
    };

    const updateScreen = function () {
        displayTasks();

        if (list.getTasks().length === 0) mainDisplay.classList.add("hidden");
        else mainDisplay.classList.remove("hidden");
    };

    closeBtn.addEventListener("click", closeModal);
    addBtn.addEventListener("click", openModal);

    form.addEventListener("submit", handleSubmit);

    updateScreen();
}

import "animate.css";

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".btn-close");
const addBtn = document.querySelector("#add");
const form = document.querySelector(".add-task");
const mainDisplay = document.querySelector("#main-display");
const sideBar = document.querySelector(".side-bar");

export default function UIController() {
    const [title, description, dueDate, priority] = form.elements;

    // const list = tasksList();

    const openModal = function () {
        modal.classList.remove("hidden", "animate__zoomOut");
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
            const titleElement = document.createElement("p");
            const descriptionElement = document.createElement("p");
            const contentContainer = document.createElement("div");
            const checkboxContainer = document.createElement("div");
            const checkbox = document.createElement("input");

            taskBox.classList.add("task-container");

            titleElement.textContent = task.title;
            titleElement.classList.add("task-title");
            descriptionElement.textContent = task.desc;
            descriptionElement.classList.add("task-description");
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
            taskBox.appendChild(checkboxContainer);
            taskBox.appendChild(contentContainer);

            mainDisplay.appendChild(taskBox);
        });
    };

    const updateScreen = function () {
        displayTasks();
        mainDisplay.classList.toggle("hidden", list.getTasks().length === 0);
    };

    closeBtn.addEventListener("click", closeModal);
    addBtn.addEventListener("click", openModal);
    form.addEventListener("submit", handleSubmit);

    // Initial screen update
    updateScreen();
}

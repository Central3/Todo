import "animate.css";
import {
    getProjectById,
    getProjectByName,
    saveProjects,
    printProjects,
    deleteTask,
    getProjects,
    createProject,
    removeProject,
} from "./projectController";
import trashIcon from "./assets/icons/trash-2.svg";
import editIcon from "./assets/icons/edit-3.svg";
import checkIcon from "./assets/icons/check.svg";
import xIcon from "./assets/icons/x.svg";

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".btn-close");
const addBtn = document.querySelector("#add");
const form = document.querySelector(".add-task");
const mainDisplay = document.querySelector("#main-display");
const modalOverlay = document.querySelector(".overlay");
const defaultProjectsList = document.querySelector(".default-projects");
const userProjectsList = document.querySelector(".user-projects");
const projectTitleElement = document.querySelector(".project-title");
const addProjectBtn = document.querySelector(".add-project-btn");
const sidebar = document.querySelector(".side-bar");

export default function UIController() {
    const [title, description, dueDate, priority] = form.elements;
    const allTasks = getProjectByName("All");
    const todayTasks = getProjectByName("Today");
    const defaultProjects = [allTasks, todayTasks];
    let userProjects = getProjects().slice(2);
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

        const lastEleId =
            allTasks.getTasks()[allTasks.getTasks().length - 1].id;

        if (selectedProject !== todayTasks && selectedProject !== allTasks) {
            selectedProject.addTask(
                title.value,
                description.value,
                dueDate.value,
                priority.value,
                false,
                lastEleId
            );
        }

        updateTodayList();

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
            const deleteBtn = document.createElement("img");
            const editBtn = document.createElement("img");

            taskBox.classList.add("task-container");
            taskBox.setAttribute("data-task-id", `${task.id}`);

            titleElement.textContent = task.title;
            deleteBtn.src = trashIcon;
            deleteBtn.setAttribute("alt", "delete");
            editBtn.src = editIcon;
            editBtn.setAttribute("alt", "edit");
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
            deleteBtn.classList.add("delete-task");
            editBtn.classList.add("edit-task");

            checkbox.addEventListener("change", () => {
                task.done = checkbox.checked;
            });

            checkboxContainer.appendChild(checkbox);
            contentContainer.appendChild(titleElement);
            contentContainer.appendChild(descriptionElement);
            contentContainer.appendChild(dueDateElement);
            taskBox.appendChild(checkboxContainer);
            taskBox.appendChild(contentContainer);
            taskBox.appendChild(editBtn);
            taskBox.appendChild(deleteBtn);

            mainDisplay.appendChild(taskBox);
        });
    };

    const displayDefaultProjects = function () {
        defaultProjectsList.textContent = "";

        defaultProjects.forEach((project) => {
            const container = document.createElement("div");
            container.textContent = project.name;
            container.setAttribute("data-project-id", `${project.id}`);
            container.classList.add("project", "poppins-semibold");

            defaultProjectsList.appendChild(container);
        });
    };

    const displayUserProjects = function () {
        userProjectsList.textContent = "";

        userProjects.forEach((project) => {
            const container = document.createElement("div");
            const removeBtn = document.createElement("img");
            removeBtn.src = xIcon;
            removeBtn.classList.add("remove-project");
            container.textContent = project.name;
            container.append(removeBtn);
            container.setAttribute("data-project-id", `${project.id}`);
            container.classList.add("custom-project", "poppins-semibold");

            userProjectsList.appendChild(container);
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
            }
        });
    };

    const handleSidebarClick = (event) => {
        if (
            event.target.classList.contains("custom-project") ||
            event.target.classList.contains("project")
        ) {
            selectedProject = getProjectById(event.target.dataset.projectId);
        }

        if (event.target.classList.contains("remove-project")) {
            removeProject(event.target.parentNode.dataset.projectId);
            userProjects = getProjects().slice(2);
            selectedProject = allTasks;
        }

        updateScreen();
    };

    const mainDisplayClick = (event) => {
        if (event.target.classList.contains("delete-task")) {
            const taskId = event.target.parentNode.dataset.taskId;
            selectedProject.deleteTask(taskId);
            allTasks.deleteTask(taskId);

            getProjects()
                .slice(2)
                .forEach((item) => item.deleteTask(taskId));

            updateScreen();
        }

        if (event.target.classList.contains("edit-task")) {
            console.log("Edit task");
        }
    };

    const handleAddProject = function () {
        const divContainer = document.createElement("div");
        const inputTitle = document.createElement("input");
        const confirmBtn = document.createElement("button");
        const cancelBtn = document.createElement("button");
        divContainer.setAttribute("class", "add-project-form");
        inputTitle.setAttribute("type", "text");
        inputTitle.setAttribute("name", "new-title");
        inputTitle.setAttribute("id", "new-title");
        confirmBtn.innerHTML = `<img src="${checkIcon}" alt="confirm">`;
        cancelBtn.innerHTML = `<img src="${xIcon}" alt="cancel">`;
        divContainer.appendChild(inputTitle);
        divContainer.appendChild(confirmBtn);
        divContainer.appendChild(cancelBtn);

        document.querySelectorAll(".add-project-form").forEach((ele) => {
            ele.remove();
        });

        addProjectBtn.insertAdjacentElement("beforebegin", divContainer);

        inputTitle.focus();

        confirmBtn.addEventListener("click", () => {
            if (inputTitle.value.length > 0) {
                createProject("#" + inputTitle.value);
                divContainer.classList.add("hidden");
                userProjects = getProjects().slice(2);
                displayUserProjects();
            }
        });

        cancelBtn.addEventListener("click", () => {
            divContainer.classList.add("hidden");
        });

        userProjects = getProjects().slice(2);
        updateScreen();
    };

    const updateScreen = function () {
        projectTitleElement.textContent = selectedProject.name;
        displayTasks();
        displayDefaultProjects();
        displayUserProjects();
        updateTodayList();
        saveProjects();

        defaultProjectsList.childNodes.forEach((node) => {
            if (node.dataset.projectId === selectedProject.id)
                node.classList.add("selected");
            else node.classList.remove("selected");
        });
        userProjectsList.childNodes.forEach((node) => {
            if (node.dataset.projectId === selectedProject.id)
                node.classList.add("selected");
            else node.classList.remove("selected");
        });

        mainDisplay.classList.toggle(
            "hidden",
            selectedProject.getTasks().length === 0
        );
    };

    closeBtn.addEventListener("click", closeModal);
    addBtn.addEventListener("click", openModal);
    form.addEventListener("submit", handleSubmit);
    sidebar.addEventListener("click", handleSidebarClick);
    mainDisplay.addEventListener("click", mainDisplayClick);
    addProjectBtn.addEventListener("click", handleAddProject);

    // Initial screen update
    updateScreen();
}

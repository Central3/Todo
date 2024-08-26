import "animate.css";
import {
    getProjectById,
    getProjectByName,
    saveProjects,
    getProjects,
    createProject,
    removeProject,
} from "./projectController";
import { openModal, closeModal } from "./modalFunctionality";
import { updateTodayList } from "./todayListUpdater";
import { taskRenderer } from "./taskRenderer";
import checkIcon from "./assets/icons/check.svg";
import xIcon from "./assets/icons/x.svg";
import xIconBlack from "./assets/icons/xBlack.svg";
import { createTaskForm } from "./taskForm";

const addBtn = document.querySelector("#add");
const form = createTaskForm("Add Task");
const editForm = createTaskForm("Save Task");
const mainDisplay = document.querySelector("#main-display");
const defaultProjectsList = document.querySelector(".default-projects");
const userProjectsList = document.querySelector(".user-projects");
const projectTitleElement = document.querySelector(".project-title");
const addProjectBtn = document.querySelector(".add-project-btn");
const sidebar = document.querySelector(".side-bar");

export default function UIController() {
    const [title, description, dueDate, priority] = form.elements;
    const [editTitle, editDescription, editDueDate, editPriority] =
        editForm.elements;
    const allTasks = getProjectByName("All");
    const todayTasks = getProjectByName("Today");
    const defaultProjects = [allTasks, todayTasks];
    let userProjects = getProjects().slice(2);
    let selectedProject = allTasks;

    const handleSubmit = function (event) {
        event.preventDefault();

        if (event.target.classList.contains("save-task")) {
            const id = event.target.dataset.taskId;

            allTasks.editTask(
                id,
                editTitle.value,
                editDescription.value,
                editDueDate.value,
                editPriority.value
            );

            selectedProject.editTask(
                id,
                editTitle.value,
                editDescription.value,
                editDueDate.value,
                editPriority.value
            );

            userProjects.forEach((project) => {
                project.editTask(
                    id,
                    editTitle.value,
                    editDescription.value,
                    editDueDate.value,
                    editPriority.value
                );
            });
        } else {
            allTasks.addTask(
                title.value,
                description.value,
                dueDate.value,
                priority.value
            );

            const lastEleId =
                allTasks.getTasks()[allTasks.getTasks().length - 1].id;

            if (
                selectedProject !== todayTasks &&
                selectedProject !== allTasks
            ) {
                selectedProject.addTask(
                    title.value,
                    description.value,
                    dueDate.value,
                    priority.value,
                    false,
                    lastEleId
                );
            }
        }

        updateTodayList(todayTasks, allTasks);

        closeModal();
        form.reset();
        updateScreen();
    };

    const displayTasks = function () {
        mainDisplay.textContent = "";

        selectedProject.getTasks().forEach((task) => {
            const taskBox = taskRenderer(task);

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
            removeBtn.src = xIconBlack;
            removeBtn.classList.add("remove-project");
            container.textContent = project.name;
            container.append(removeBtn);
            container.setAttribute("data-project-id", `${project.id}`);
            container.classList.add("custom-project", "poppins-semibold");

            userProjectsList.appendChild(container);
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
            const id = event.target.parentNode.dataset.projectId;

            getProjectById(id)
                .getTasks()
                .forEach((item) => {
                    allTasks.deleteTask(item.id);
                });

            removeProject(id);
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
            const taskId = event.target.parentNode.dataset.taskId;
            const taskObj = selectedProject.getTask(taskId);

            editForm.dataset.taskId = taskId;

            editTitle.value = taskObj.title;
            editDescription.value = taskObj.desc;
            editPriority.value = taskObj.priority;

            if (taskObj.dueDate)
                editDueDate.value = taskObj.dueDate.toLocaleDateString("en-CA");

            openModal(editForm);
            editTitle.focus();
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
        inputTitle.setAttribute("autocomplete", "off");
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

    const handleFormClick = function (event) {
        if (event.target.classList.value === "btn-close") {
            form.reset();
            closeModal();
        }
    };

    const updateScreen = function () {
        projectTitleElement.textContent = selectedProject.name;
        displayTasks();
        displayDefaultProjects();
        displayUserProjects();
        updateTodayList(todayTasks, allTasks);
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

    addBtn.addEventListener("click", () => {
        openModal(form);
        title.focus();
    });
    form.addEventListener("submit", handleSubmit);
    form.addEventListener("click", handleFormClick);
    editForm.addEventListener("click", handleFormClick);
    editForm.addEventListener("submit", handleSubmit);
    sidebar.addEventListener("click", handleSidebarClick);
    mainDisplay.addEventListener("click", mainDisplayClick);
    addProjectBtn.addEventListener("click", handleAddProject);

    // Initial screen update
    updateScreen();
}

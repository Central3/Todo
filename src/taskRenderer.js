import trashIcon from "./assets/icons/trash-2.svg";
import editIcon from "./assets/icons/edit-3.svg";

export const taskRenderer = function (obj) {
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
    taskBox.setAttribute("data-task-id", `${obj.id}`);

    titleElement.textContent = obj.title;
    deleteBtn.src = trashIcon;
    deleteBtn.setAttribute("alt", "delete");
    editBtn.src = editIcon;
    editBtn.setAttribute("alt", "edit");
    titleElement.classList.add("task-title");
    descriptionElement.textContent = obj.desc;
    descriptionElement.classList.add("task-description");

    if (obj.dueDate)
        dueDateElement.innerHTML = `Due: ${obj.dueDate.toLocaleDateString(
            "en-GB"
        )}`;
    dueDateElement.classList.add("due");

    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = obj.done;
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

    return taskBox;
};

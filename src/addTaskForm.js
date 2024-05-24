import tasksList from "./tasksList";

const list = tasksList();

export default function addTaskForm() {
    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".btn-close");
    const addBtn = document.querySelector("#add");
    const form = document.querySelector(".add-task");

    const openModal = function () {
        modal.classList.remove("hidden");
    };

    const closeModal = function () {
        modal.classList.add("hidden");
    };

    const handleSubmit = function (event) {
        event.preventDefault();

        list.addTask(
            form.elements["title"].value,
            form.elements["description"].value,
            form.elements["dueDate"].value,
            form.elements["priority"].value
        );

        list.printTasks();
        closeModal();
    };

    closeBtn.addEventListener("click", closeModal);
    addBtn.addEventListener("click", openModal);

    form.addEventListener("submit", handleSubmit);
}

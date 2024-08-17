import { createElement } from "./domUtil";

export const createTaskForm = function () {
    const form = createElement("form", { action: "", class: "add-task" });

    const titleContainer = createElement("div");
    const titleInput = createElement("input", {
        type: "text",
        name: "title",
        id: "title",
        placeholder: "Title",
        class: "poppins-bold",
        required: "true",
    });
    titleContainer.appendChild(titleInput);

    const descriptionContainer = createElement("div");
    const descriptionInput = createElement("textarea", {
        name: "description",
        id: "description",
        placeholder: "Description",
    });
    descriptionContainer.appendChild(descriptionInput);

    const otherContainer = createElement("div");
    const datePicker = createElement("input", {
        type: "date",
        name: "dueDate",
        id: "dueDate",
    });
    const selectPriority = createElement("select", {
        name: "priority",
        id: "priority",
    });

    const priorities = ["Priority1", "Priority2", "Priority3", "Priority4"];
    priorities.forEach((priority, index) => {
        const option = createElement(
            "option",
            { value: `p${index + 1}` },
            priority
        );
        selectPriority.appendChild(option);
    });

    const formFooter = createElement("div", { class: "modal-footer" });
    const cancelBtn = createElement(
        "button",
        { type: "button", class: "btn-close" },
        "Cancel"
    );
    const addBtn = createElement(
        "button",
        { type: "button", class: "add-btn" },
        "Add Task"
    );
    formFooter.appendChild(cancelBtn);
    formFooter.appendChild(addBtn);

    // cancelBtn.addEventListener("click", () => {
    //     form.reset();
    //     closeModal();
    // });

    otherContainer.appendChild(datePicker);
    otherContainer.appendChild(selectPriority);
    form.appendChild(titleContainer);
    form.appendChild(descriptionContainer);
    form.appendChild(otherContainer);
    form.appendChild(formFooter);

    return form;
};

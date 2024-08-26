import { createElement } from "./domUtil";

export const createFormFooter = function (btnText) {
    const formFooter = createElement("div", { class: "modal-footer" });
    const cancelBtn = createElement(
        "button",
        { type: "button", class: "btn-close" },
        "Cancel"
    );
    const mainBtn = createElement(
        "button",
        { type: "submit", class: btnText.split(" ").join("-").toLowerCase() },
        btnText
    );
    formFooter.appendChild(cancelBtn);
    formFooter.appendChild(mainBtn);

    return formFooter;
};

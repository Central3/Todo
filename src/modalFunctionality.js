const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".overlay");

export const openModal = function (form) {
    modal.appendChild(form);
    modal.classList.remove("hidden", "animate__zoomOut");
    modal.classList.add("animate__zoomIn");
    modalOverlay.classList.remove("hidden");
};

export const closeModal = function () {
    modal.classList.remove("animate__zoomIn");
    modal.classList.add("animate__zoomOut");
    modalOverlay.classList.add("hidden");

    modal.addEventListener("animationend", function handler() {
        modal.classList.add("hidden");

        modal.removeEventListener("animationend", handler);
    });
};

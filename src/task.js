export default function task(
    id,
    title,
    desc = "",
    dueDate = null,
    priority = "p1",
    done = false
) {
    const newTask = {
        id,
        title,
        desc,
        dueDate,
        priority,
        done,

        updateTitle(title) {
            this.title = title;
        },

        updateDesc(desc) {
            this.desc = desc;
        },

        updatePriority(priority) {
            this.priority = priority;
        },

        toggleDone() {
            this.done = !this.done;
        },
    };

    return { id, title, desc, dueDate, priority, done };
}

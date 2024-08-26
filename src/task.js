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
    };

    return newTask;
}

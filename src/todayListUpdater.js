export const updateTodayList = (todayTasks, allTasks) => {
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

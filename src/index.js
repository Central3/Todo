import tasksList from "./tasksList";

const list = tasksList();
list.printTasks();
list.addTask("code", "code for 1 hour", "03-09-2002", "low", "", "checked");
list.addTask("bath", "take a bath", "09-03-2002", "high", "", "checked");
list.printTasks();
console.log("After deleting");
list.deleteTask();
list.printTasks();

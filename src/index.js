import "./style.css";
import UIController from "./UIController";
import { createProject, printProjects } from "./projectController";

createProject("All");
createProject("Today");

UIController();

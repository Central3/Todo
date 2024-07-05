import "./style.css";
import UIController from "./UIController";
import { createProject, getProjectByName } from "./projectController";

if (!getProjectByName("All")) {
    createProject("All");
    createProject("Today");
}

UIController();

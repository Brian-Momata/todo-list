import navLinkClickHandler from "./nav-link";
import addNavProject from "./nav-project";
import Project from "./project";

export default function addTodoToProject(projectTitle, todo){
  const newProject = new Project(projectTitle, []);
  newProject.addTask(todo);
  addNavProject(newProject, navLinkClickHandler);
}
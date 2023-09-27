import navLinkClickHandler from "./nav-link";
import addNavProject from "./nav-project";
import Project from "./project";
import allCategories from "./categories";

// An array that has all project objects
const projects = [];

export default function addTodoToProject(projectTitle, todo){
  const availableCategories = allCategories();
  
  // Check if the project title already exists in the available categories
  if(availableCategories.includes(projectTitle)){
    // Find the project with the matching title
    const project = projects.find(p => p.title === projectTitle);
    
    // Add the todo to the existing project
    project.addTask(todo);
  }
  else {
    // Create a new project if the category doesn't exist
    const newProject = new Project(projectTitle, []);
    newProject.addTask(todo);
    addNavProject(newProject, navLinkClickHandler);
    projects.push(newProject);
  }
}

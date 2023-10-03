import navLinkClickHandler from "./nav-link";
import addNavProject from "./nav-project";
import Project from "./project";
import allCategories from "./categories";
import projects from "./index";

export default function addTodoToProject(projectTitle, todo) {
  const defaultProjectTitle = 'Default';
  
  // Set the default project
  let defaultProject = projects.find(p => p.title === defaultProjectTitle);

  // Add the todo to the default project
  defaultProject.addTask(todo);

  // Check if the project title is empty or not provided
  if (!projectTitle) {
    return; // No need to add the todo to other projects if projectTitle is not specified
  }

  const availableCategories = allCategories();

  // Check if the project title already exists in the available categories
  if (availableCategories.includes(projectTitle)) {
    // Find the project with the matching title
    const project = projects.find(p => p.title === projectTitle);

    // Add the todo to the existing project
    project.addTask(todo);
  } else {
    // Create a new project if the category doesn't exist
    const newProject = new Project(projectTitle, []);
    newProject.addTask(todo);
    addNavProject(newProject, navLinkClickHandler);
    projects.push(newProject);
  }
}

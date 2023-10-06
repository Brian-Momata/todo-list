import './style.css';
import Todo from './todo';
import addTodoToProject from './add-project-todo';
import Project from './project';
import navLinkClickHandler from "./nav-link";
import addNavProject from "./nav-project";

// An array that has all project objects
const projects = [];

const dialog = document.getElementById('task-dialog');
const toggleFormButton = document.getElementById('toggle-form');
const taskForm = document.getElementById('task-form');

document.addEventListener('DOMContentLoaded', () => {
  const defaultProjectTitle = 'Default';
  const defaultProject = new Project(defaultProjectTitle, []);
  addNavProject(defaultProject, navLinkClickHandler);
  projects.push(defaultProject);
});

// Opens modal with the form
toggleFormButton.addEventListener('click', () => {
  dialog.showModal();
})

// Handle form submission
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = taskForm.elements.title.value;
  const description = taskForm.elements.description.value;
  const dueDate = taskForm.elements.dueDate.value;
  const priority = taskForm.elements.priority.value;
  const projectTitle = taskForm.elements.category.value;

  const newTask = new Todo(title, description, dueDate, priority);
  addTodoToProject(projectTitle, newTask);
  dialog.close();
})

export default projects;

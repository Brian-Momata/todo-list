export default function addNavProject(project, clickHandler) {
  const projectLinks = document.querySelector('.project-links');
  const newProject = document.createElement('li');
  const link = document.createElement('a');
  link.textContent = project.title;
  link.href = '#';
  link.addEventListener('click', () => clickHandler(project));
  newProject.appendChild(link);
  projectLinks.appendChild(newProject);
}

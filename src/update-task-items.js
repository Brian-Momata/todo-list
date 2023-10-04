import projects from "./index";

export default function updateTaskItems() {
  const taskItems = document.querySelectorAll('.task-item');

  taskItems.forEach(taskItem => {
    const taskInfo = taskItem.querySelector('.task-info');
    const taskAction = taskItem.querySelector('.task-action');
    const deleteButton = taskItem.querySelector('.delete-btn');

    taskItem.addEventListener('click', () => {
      taskInfo.style.display = taskInfo.style.display === 'none' ? 'block' : 'none';
      taskAction.style.display = taskAction.style.display === 'none' ? 'block' : 'none';
    });

    deleteButton.addEventListener('click', () => {
      const projectTitle = taskItem.getAttribute('data-project-title');
      const project = projects.find(p => p.title === projectTitle);

      if (project) {
        const taskIndex = taskItem.dataset.index;
        const taskToDelete = project.tasks[taskIndex];
        project.removeTask(taskToDelete);
      }
    });
  });
}

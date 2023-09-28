export default function navLinkClickHandler(project) {
  const contentContainer = document.querySelector('.content');

  // Clear the existing content in the container
  contentContainer.innerHTML = '';

  project.tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const taskId = `task-${index}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = taskId;

    const taskTitle = document.createElement('h3');
    taskTitle.textContent = task.title;

    const taskDescription = document.createElement('p');
    taskDescription.textContent = task.description;

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(taskDescription);

    contentContainer.appendChild(taskItem);
  });
}

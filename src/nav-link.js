import updateTaskItems from "./update-task-items";

export default function navLinkClickHandler(project) {
  const contentContainer = document.querySelector('.content');

  contentContainer.innerHTML = '';

  project.tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.setAttribute('data-project-title', project.title);
    taskItem.setAttribute('data-index', index);
   
    const taskId = `task-${index}`;
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = taskId;
  
    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');
  
    const taskTitle = document.createElement('h3');
    taskTitle.textContent = task.title;
  
    const taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');
  
    const taskDescription = document.createElement('p');
    taskDescription.textContent = task.description;
  
    const taskDueDate = document.createElement('p');
    taskDueDate.textContent = `Due Date: ${task.dueDate}`;
  
    const taskPriority = document.createElement('p');
    taskPriority.textContent = `Priority: ${task.priority}`;

    switch (task.priority) {
      case 'low':
        taskItem.classList.add('low-priority');
        break;
      case 'medium':
        taskItem.classList.add('medium-priority');
        break;
      case 'high':
        taskItem.classList.add('high-priority');
        break;
    }
  
    const taskAction = document.createElement('div');
    taskAction.classList.add('task-action');
  
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';
  
    taskAction.appendChild(deleteButton);
  
    taskInfo.appendChild(taskDescription);
    taskInfo.appendChild(taskDueDate);
    taskInfo.appendChild(taskPriority);
  
    taskContent.appendChild(checkbox);
    taskContent.appendChild(taskTitle);
  
    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskInfo);
    taskItem.appendChild(taskAction);
  
    contentContainer.appendChild(taskItem);
  });

  updateTaskItems();
}

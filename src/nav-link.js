import updateTaskItems from "./update-task-items";

export default function navLinkClickHandler(project) {
  const contentContainer = document.querySelector('.content');

  contentContainer.innerHTML = '';

  project.tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
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
  
    const taskAction = document.createElement('div');
    taskAction.classList.add('task-action');
  
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';
  
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';
  
    taskAction.appendChild(editButton);
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

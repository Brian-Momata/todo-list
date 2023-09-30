export default function updateTaskItems() {
  const taskItems = document.querySelectorAll('.task-item');

  taskItems.forEach(taskItem => {
    const taskInfo = taskItem.querySelector('.task-info');
    const taskAction = taskItem.querySelector('.task-action');
    const deleteButton = taskItem.querySelector('.delete-btn');
    const editButton = taskItem.querySelector('.edit-btn');

    taskItem.addEventListener('click', () => {
      taskInfo.style.display = taskInfo.style.display === 'none' ? 'block' : 'none';
      taskAction.style.display = taskAction.style.display === 'none' ? 'block' : 'none';
    });

    deleteButton.addEventListener('click', () => {
      // Handle delete action here
    });

    editButton.addEventListener('click', () => {
      // Handle edit action here
    });
  });
}
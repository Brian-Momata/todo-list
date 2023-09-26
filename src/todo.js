export default class Todo {
  constructor(title, description,dueDate, priority, state = 'uncompleted') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.state = state;
  }
  markCompleted() {
    this.state = 'completed';
  }
  markUncompleted() {
    this.state = 'uncompleted';
  }
}
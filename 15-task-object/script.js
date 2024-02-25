"use strict";

const todoList = {
  tasks: [
    { id: 1, priority: 1, title: "Помыть посуду" },
    { id: 2, priority: 3, title: "Сделать домашнее задание" },
    { id: 3, priority: 2, title: "Погулять с собакой" },
  ],
  findTaskIndex: function (taskId) {
    const index = this.tasks.findIndex((el) => {
      return el.id === taskId;
    });
    if (index < 0) {
      throw new Error(`task with ID: ${taskId} doesn't exist`);
    }
    return index;
  },

  add: function (task) {
    this.tasks.push(task);
  },
  remove: function (taskId) {
    this.tasks.splice(this.findTaskIndex(taskId), 1);
  },
  update: function (taskId, title = "", priority = 0) {
    const index = this.findTaskIndex(taskId);
    if (title != "") {
      this.tasks[index].title = title;
    }
    if (priority != 0 && !isNaN(priority)) {
      this.tasks[index].priority = priority;
    }
  },
  sortTasksByPriority: function (order = "desc") {
    if (order === "desc") {
      this.tasks.sort((a, b) => b.priority - a.priority);
      return;
    }

    this.tasks.sort((a, b) => a.priority - b.priority);
  },
};

console.log("Initial tasks:");
console.log(todoList.tasks);

console.log("Add task with id 4:");
todoList.add({ id: 4, priority: 4, title: "Помыть полы" });
console.log(todoList.tasks);

console.log("Remove task with id 3:");
todoList.remove(3);
console.log(todoList.tasks);

console.log("Update task with id 2:");
todoList.update(2, "Сделать домашнее задание по JS", 5);
console.log(todoList.tasks);

console.log("Sort tasks by priority:");
todoList.sortTasksByPriority();
console.log(todoList.tasks);

// Output:

// Initial tasks:
// [
//   { id: 1, priority: 1, title: 'Помыть посуду' },
//   { id: 2, priority: 3, title: 'Сделать домашнее задание' },
//   { id: 3, priority: 2, title: 'Погулять с собакой' }
// ]
// Add task with id 4:
// [
//   { id: 1, priority: 1, title: 'Помыть посуду' },
//   { id: 2, priority: 3, title: 'Сделать домашнее задание' },
//   { id: 3, priority: 2, title: 'Погулять с собакой' },
//   { id: 4, priority: 4, title: 'Помыть полы' }
// ]
// Remove task with id 3:
// [
//   { id: 1, priority: 1, title: 'Помыть посуду' },
//   { id: 2, priority: 3, title: 'Сделать домашнее задание' },
//   { id: 4, priority: 4, title: 'Помыть полы' }
// ]
// Update task with id 2:
// [
//   { id: 1, priority: 1, title: 'Помыть посуду' },
//   { id: 2, priority: 5, title: 'Сделать домашнее задание по JS' },
//   { id: 4, priority: 4, title: 'Помыть полы' }
// ]
// Sort tasks by priority:
// [
//   { id: 2, priority: 5, title: 'Сделать домашнее задание по JS' },
//   { id: 4, priority: 4, title: 'Помыть полы' },
//   { id: 1, priority: 1, title: 'Помыть посуду' }
// ]

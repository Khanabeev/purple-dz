"use strict";

const todoList = {
  tasks: [],
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
    const newId = this.tasks.length
      ? Math.max(...this.tasks.map((el) => el.id)) + 1
      : 1;
    task = { id: newId, ...task };

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

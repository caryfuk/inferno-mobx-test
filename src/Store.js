import { extendObservable, autorun } from "mobx";

class Store {
  constructor() {
    extendObservable(this, {
      get completedTodosCount() {
        return this.todos.filter(
          todo => todo.completed === true
        ).length;
      },
    
      get report() {
        if (this.todos.length === 0)
          return "<none>";
        return `Next todo: "${this.todos[0].task}". ` +
          `Progress: ${this.completedTodosCount}/${this.todos.length}`;
      }
    });
    autorun(() => console.log(this.report));
  }

  todos = [];

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    });
  }
}

export default Store;
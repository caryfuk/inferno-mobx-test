import { extendObservable, computed } from "mobx";

class Store {
  constructor() {
    extendObservable(this, {
			completedTodosCount: computed(() => {
    	  return this.todos.filter(
			    todo => todo.completed === true
		    ).length;
			}),
			report: computed(() => {
		    if (this.todos.length === 0)
			    return "<none>";
		    return `Next todo: "${this.todos[0].task}". ` + 
			    `Progress: ${this.completedTodosCount}/${this.todos.length}`; 
			})
    })
  }

  todos = []

	addTodo(task) {
		this.todos.push({ 
			task: task,
			completed: false,
			assignee: null
		});
	}
}

const ObservableStore = new Store();
ObservableStore.addTodo('test');

export default ObservableStore;
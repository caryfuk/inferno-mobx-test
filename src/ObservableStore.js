import { extendObservable, computed } from "mobx";

class Store {
  constructor() {
    extendObservable(this, {
			completedTodosCount: computed(() => {
    	  return this.todos.filter(
			    todo => todo.completed === true
		    ).length;
			}),
			report: computed(() => `Progress: ${this.completedTodosCount}/${this.todos.length}`),
			todos: []
    })
  }

	addTodo(task) {
		this.todos.push({ 
			task: task,
			completed: false
		});
	}
}

const ObservableStore = new Store();

export default ObservableStore;
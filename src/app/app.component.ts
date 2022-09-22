import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';
  todos: Todo[] = [];
  newTodo: string;

  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = false;
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert('please Enter Todo');
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  completeTodo(index: number) {
    this.todos[index].isCompleted = !this.todos[index].isCompleted;
  }
}

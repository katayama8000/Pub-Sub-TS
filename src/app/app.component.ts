import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo-list';
  todos: Todo[] = [];
  newTodo: string;

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content: 'Angular Todo List',
      charset: 'UTF-8',
      httpEquiv: 'Content-Type',
      scheme: 'UTF-8',
      url: 'https://angular-todo-list-1e8a3.web.app/',
      site_name: 'Angular Todo List',
    });
  }

  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = false;
      this.todos = [...this.todos, todo];
      this.newTodo = '';
      console.log(this.todos);
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

  /**
   *時間を判定
   *日中は白、夜は黒
   * @param number
   * @returns
   * @memberof AppComponent
   */
  isDayTime(number: number): boolean {
    let hour = new Date().getHours();
    return hour > number && hour < 18;
  }
}

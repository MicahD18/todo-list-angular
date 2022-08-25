import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  
  todos: Todo[] | undefined;

  inputTodo:string = "";

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { content: 'Code', completed: false },
      { content: 'Learn Angular', completed: false },
    ];
  }

  toggleDone(id: number) {
    this.todos?.map((value, index) => {
      if (index === id) {
        // sets completed to true
        value.completed = !value.completed;
      }
      return value;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos?.filter((value, index) => index !== id);
  }
  
  addTodo() {
    this.todos?.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = "";
  }
}

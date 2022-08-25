import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  
  todos: Todo[] | undefined;

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { content: 'Code', completed: true },
      { content: 'Learn Angular', completed: false },
      { content: "Learn Rubik's Cube", completed: false },
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

}

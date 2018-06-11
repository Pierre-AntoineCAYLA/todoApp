import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItem:Array<Todo>;
  nbItem:number;

  constructor() { }

  ngOnInit() {
    this.todoItem=[
      new Todo("chose à faire",true),
      new Todo("aller voir la doc",true),
      new Todo("terminer app",false),

    ]
    this.nbItem = this.todoItem.length;
  }

}

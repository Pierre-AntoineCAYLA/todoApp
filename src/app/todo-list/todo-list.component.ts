import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Model/Todo';
import TodoService from '../todo-services/todoServices';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  _todo:Array<Todo>;

  get todos():Array<Todo>{return this._todo}
  set todos(todos:Array<Todo>){this._todo=todos}

  constructor(private todoService:TodoService) { }
ngOnInit() {
this.todoService.getTodo().then(value=>this._todo=value);
}

}

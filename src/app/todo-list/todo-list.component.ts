import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Model/Todo';
import TodoService from '../todo-services/todoServices';
import { ApiServiceService } from '../services/api-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers:[ApiServiceService]
})
export class TodoListComponent implements OnInit {

  private _todo: Observable<Array<Todo>>;

  /*get todo(): Array<Todo> {
    return this._todo;
  }
  set todo(todo: Array<Todo>) { this._todo = todo }*/

  constructor(private todoService: TodoService, private apiService : ApiServiceService ) { }

  ngOnInit() {
   /* this.todoService.getTodo().then(value => this._todo = value);*/
    this._todo=this.apiService.getTodo();
  }

}

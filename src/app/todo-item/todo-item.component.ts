import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Model/Todo';
import TodoService from '../todo-services/todoServices';
import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo:Todo;

  textDecoration:string;

  constructor(private todoService:TodoService, private apiService:ApiServiceService) { }

  deleteTodo(){
    //this.todoService.deleteTodo(this.todo);
    this.apiService.deleteTodo(this.todo).subscribe();
  }
  
  barre(){
    this.todo.isDone=!this.todo.isDone;
    this.textDecoration=this.todo.isDone?"line-through":"none";
  }

  ngOnInit() {
    this.textDecoration=this.todo.isDone?"line-through":"none";
  }

}

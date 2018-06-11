import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Model/Todo';
import TodoService from '../todo-services/todoServices';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo:Todo;

  @Output()
  todoChecked:EventEmitter<Todo> = new EventEmitter<Todo>();

  textDecoration:string;

  selectTodo(){
    this.todoChecked.emit(this.todo);
  }

  constructor(private todoService:TodoService) { }

  deleteTodo(){
    this.todoService.deleteTodo(this.todo);
  }
  
  barre(){
    this.todo.isDone=!this.todo.isDone;
    this.textDecoration=this.todo.isDone?"line-through":"none";
  }

  ngOnInit() {
    this.textDecoration=this.todo.isDone?"line-through":"none";
  }

}

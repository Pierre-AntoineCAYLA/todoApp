import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Model/Todo';

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

  selectTodo(){
    this.todoChecked.emit(this.todo);
  }

  constructor() { }


  barreTitre(isCheck:boolean):string{
    if(isCheck){
      return "line-through";
    }else{
      return "none"
    }
  }

  ngOnInit() {
  }

}

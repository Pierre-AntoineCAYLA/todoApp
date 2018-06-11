import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Model/Todo';
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent implements OnInit {

  newTodo:Todo=new Todo("",false);
  
  constructor() { }

  handleClick() {
    console.log('TODO', this.newTodo);
  }

  ngOnInit() {
  }
}
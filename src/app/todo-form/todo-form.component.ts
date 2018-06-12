import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Model/Todo';
import {FormsModule} from "@angular/forms";
import TodoService from '../todo-services/todoServices';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})

export class TodoFormComponent implements OnInit {

  newTodo:Todo=new Todo("",false);
  
  constructor(private todoService:TodoService, private apiService:ApiServiceService) { }

  ajoutClick() {
    console.log('TODO', this.newTodo);
    //this.todoService.addTodo(new Todo(this.newTodo.title, this.newTodo.isDone));
    this.apiService.postTodo(new Todo(this.newTodo.title, this.newTodo.isDone)).subscribe();
  }

  modifClick() {
    console.log('Update', this.newTodo);
    //this.todoService.addTodo(new Todo(this.newTodo.title, this.newTodo.isDone));
    this.apiService.putTodo(new Todo(this.newTodo.title, this.newTodo.isDone, this.newTodo.id)).subscribe();
  }

  

  ngOnInit() {
  }
}
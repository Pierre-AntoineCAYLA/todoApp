import { Todo } from "../../Model/Todo";
import todoApi from "./todoApi";
import {Injectable} from '@angular/core';

@Injectable()
export default class TodoService {
  
    constructor(private todoApi: todoApi) { }

    getTodo(): Promise<Array<Todo>> {
        return this.todoApi.fetchTodo();
    }

    addTodo(todo:Todo) {
       this.todoApi.addTodo(todo);
    }

    deleteTodo(todo:Todo){
        this.todoApi.deleteTodo(todo);
    }
}
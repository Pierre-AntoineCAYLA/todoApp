import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../Model/Todo';
import { Observable } from 'rxjs';


const API_BASE_URL: string = 'http://localhost:3000/';
const API_TODO: string = 'todos';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getTodo(): Observable<Array<Todo>> {
    return <Observable<Array<Todo>>>this.http.get(`${API_BASE_URL}${API_TODO}`);
  }

  postTodo(todo: Todo): Observable<Todo> {
    return <Observable<Todo>>this.http.post(`${API_BASE_URL}${API_TODO}`, todo);
  }

  deleteTodo(todo: Todo){
    return this.http.delete(`${API_BASE_URL}${API_TODO}/${todo.id}`);
  }

  putTodo(todo: Todo){
    return this.http.put<Todo>(`${API_BASE_URL}${API_TODO}/${todo.id}`,todo);
  }
}
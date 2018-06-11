import { Todo } from "../../Model/Todo";

export default class todoApi {
    private _todo:Array<Todo>=[ new Todo("chose à faire",true), new Todo("aller voir la doc",true), new Todo("terminer app",false),];
    
    fetchTodo(): Promise<Array<Todo>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                   this._todo
                )
            },10);
        });
    }

    addTodo(todo:Todo){
        this._todo.push(todo);
    }

    deleteTodo(todo:Todo){
        this._todo.splice(this._todo.indexOf(todo),1);
    }
}
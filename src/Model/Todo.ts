export class Todo{
   public title:string;
   public isDone:boolean;
   public id:number;

    constructor(_title:string,_isDone:boolean, _id?:number){
        this.title=_title;
        this.isDone= _isDone;
        this.id=_id;
    }

    
}
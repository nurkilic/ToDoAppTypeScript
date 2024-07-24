
export interface ToDoInitialState {
    todos:ToDoType[],
    filterTodos:ToDoType[],
    todoslocale:ToDoType[]
    // newtodo:string,
  }

  export interface ToDoType{
    id:number,
    content:string
  }
  export interface MyPayload {
    newTodo: string;
    todo: ToDoType;
  }
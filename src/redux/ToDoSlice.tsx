import { createSlice } from "@reduxjs/toolkit";
import {ToDoInitialState} from "../types/Types"
import {ToDoType} from "../types/Types"
import {MyPayload} from "../types/Types"
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState:ToDoInitialState={
todos:[],
filterTodos:[],
todoslocale:[]
// newtodo:""
}
export const ToDoSlice=createSlice({

    name:"todo",
    initialState,
    reducers:{
       createTodo:(state:ToDoInitialState,action:PayloadAction<ToDoType>)=>{
       state.todoslocale=[...state.todoslocale,action.payload]
       localStorage.setItem("todo",JSON.stringify(state.todoslocale))

        },

        removeTodo:(state:ToDoInitialState,action:PayloadAction<ToDoType>)=>{
        
         state.filterTodos=state.todoslocale.filter((item:ToDoType)=>(item.id!==action.payload.id))
         state.todoslocale=state.filterTodos
         localStorage.setItem("todo",JSON.stringify(state.todoslocale))
         
        },

        editTodo:(state:ToDoInitialState,action:PayloadAction<MyPayload>)=>{
            state.todoslocale.map((item:ToDoType)=>{
                if(item.id===action.payload.todo.id)
                {
                item.content=action.payload.newTodo
                localStorage.setItem("todo",JSON.stringify(state.todoslocale))
                }
            })

        },

        addLocale:(state:ToDoInitialState)=>{
            state.todoslocale=JSON.parse(localStorage.getItem("todo") || '""')
            
        }


    }

})

export const {createTodo ,removeTodo,editTodo,addLocale} = ToDoSlice.actions

export default ToDoSlice.reducer
import { useDispatch, useSelector } from "react-redux"
import ToDo from "./ToDo"
import { RootState } from "../redux/store"
import {ToDoType} from "../types/Types"
import { useEffect } from "react"
import { addLocale } from "../redux/ToDoSlice"


function ToDoList() {
  const dispatch=useDispatch();

  useEffect(()=>{
   dispatch(addLocale())
  },[])
  
  
    const {todoslocale}=useSelector((state:RootState)=>state.todo)
    // const {todos} =useSelector((state:RootState) => state.todo)
    console.log(todoslocale)
    
    
    
  return (
    <div>
     {
       todoslocale && todoslocale.map((todo:ToDoType)=><ToDo key={todo.id} todo={todo}></ToDo>)
     }
    </div>
  )
}

export default ToDoList
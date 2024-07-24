import { FaMinusCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
// import type { RootState } from '../redux/store'
import {ToDoType} from "../types/Types"
import { useState } from "react";
import { addLocale, editTodo, removeTodo } from "../redux/ToDoSlice";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";

interface ToDoProps{
    todo:ToDoType
}

function ToDo({todo}:ToDoProps) {

    const dispatch=useDispatch()
    const [edit,setEdit]=useState(false)
    const [newValue,setnewvalue]=useState(todo.content)

    // const {newtodo}=useSelector((state:RootState)=>state.todo)

    // const value = useSelector((state: RootState) => state.todo)
    // console.log(value)

    const handleKey=(event: React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === 'Enter')
        {
            setEdit(false)
            dispatch(editTodo({newTodo: newValue,
                todo: todo}))
            
        }

    }
  return (
    <div className="flex justify-center bg-">
        <div className="break-normal p-2 w-1/3 max-lg:w-2/3  border border-gray-400  mt-2 rounded-md flex justify-between items-center bg-slate-100 ">
        {edit ? <input onKeyDown={handleKey} className="w-11/12 bg-slate-100 border border-gray-200 rounded-md mr-1 p-1" onChange={(e)=>setnewvalue(e.target.value)} value={newValue}></input> :<p className="">{todo.content}</p>} 
        <div className="flex gap-x-2 text-xl ">

        <FaMinusCircle onClick={()=>{

        dispatch(removeTodo(todo))
        // dispatch(addLocale())
        }} className="cursor-pointer" />
        {edit ? <FaCheck onClick={()=>
        {
            setEdit(false)
            dispatch(editTodo({ newTodo: newValue,
                todo: todo}))
        }} className="cursor-pointer" /> 
        : <FaEdit onClick={()=>setEdit(true)}  className="cursor-pointer" />}

        </div>

        
        </div>
    </div>
  )
}

export default ToDo
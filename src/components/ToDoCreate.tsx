import { useDispatch } from "react-redux"

import { useState } from "react";
import { ToDoType } from "../types/Types";
import { createTodo } from "../redux/ToDoSlice";

function ToDoCreate() {
  

 const dispatch=useDispatch();
 const [newTodo,setNewTodo]=useState<string>("")
 

 const handleCreateTodo=()=>{
    if(newTodo.trim().length===0)
    {
    alert("todo giriniz")
    return
    }
    const payload:ToDoType={
        id:Math.floor(Math.random()*999999),
        content:newTodo }
    
  dispatch(createTodo(payload))
  setNewTodo("")
 }

//  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//   if (event.key === 'Enter') {
    

//   }
const handleKey=(event: React.KeyboardEvent<HTMLInputElement>)=>{
  if (event.key === 'Enter')
  {
    handleCreateTodo()
  }
}
 
 


  return (
   <>
 <div className="flex justify-center items-center flex-col pt-4">
 <input  className=" p-2 border-solid border-b-2 border-gray-500 w-1/3 max-lg:w-2/3" type="text" value={newTodo}
  placeholder="ToDo Giriniz..." onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)} onKeyDown={handleKey}/>
 <button className="mt-2 hover:bg-gray-600 bg-gray-400  font-semibold text-white 
 py-2 px-4 border-2 border-gray-500 rounded cursor-pointer " 
 onClick={handleCreateTodo}>ToDo Oluştur</button>
 </div>
   
   </>
  )
}

export default ToDoCreate
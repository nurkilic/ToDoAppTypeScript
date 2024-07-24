import './App.css'
import ToDoCreate from './components/ToDoCreate'
import ToDoList from './components/ToDoList'



function App() {

  return (
    <div className='min-w-80 h-screen'>
  <ToDoCreate/>
  <ToDoList/>
      
    </div>
  )
}

export default App

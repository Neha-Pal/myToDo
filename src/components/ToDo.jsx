import { useEffect, useRef, useState } from 'react'
import './CSS/ToDo.css'
import ToDoitems from './ToDoitems';


let count = 0;
const ToDo = () => {
    const[todos,setTodos] = useState([]);
    const inputRef = useRef(null);
    const add = () =>{
        setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}]);
        inputRef.current.value = "";
        localStorage.setItem
    }
    useEffect(()=>{
      setTodos(JSON.parse(localStorage.getItem("todos")));
    },[])
    useEffect(()=>{
      
      setTimeout(()=>{
        console.log(todos);
        localStorage.setItem("todos",JSON.stringify(todos))
      },1000);
    },[todos])

  return (
    <div className='Todo'>
        <div className='Header'>To Do List</div>
        <div className='addText'>
            <input ref={inputRef} type="text" placeholder='Add your task'className='ToDoinput' />
            <div onClick={() => add()} className='btn'>ADD</div>
        </div>
        <div className='todo-list'>
          {todos.map((item,index)=>{
            return <ToDoitems key = {index} setTodos={setTodos} no = {item.no} display = {item.display} text = {item.text}/>
          })}
        </div>  
    </div>
  )
}

export default ToDo

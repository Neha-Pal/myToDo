import './CSS/ToDoitems.css';
import tick from './assets/tick.png';
import nontick from './assets/nontick.png';
import cross from './assets/cross.png'

const ToDoitems = ({ no, display, text, setTodos }) => {

  const deletetodo = (no) =>{
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no); 
    localStorage.setItem("todos", JSON.stringify(data));
    setTodos(data);
  }

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if(data[i].display === ""){
          data[i].display = "line-through";
        }
        else{
          data[i].display = "";
        }
        break;
      }
    }
    localStorage.setItem("todos", JSON.stringify(data)); // Update localStorage
    setTodos(data); // Update state with the modified data
  }
  return (
    <div className='todoitems'>
      <div className={`item_container ${display}`} onClick={()=>{toggle(no)}}>
      {display === "" ? <img src={nontick} alt="" className='nontick'/>: <img src={tick} alt="" className='tick'/>}
        <div className='items_text'>{text}</div>
      </div>
      <img src= {cross} alt="" className='cross' onClick={()=>deletetodo(no)}/>
    </div>
  );
}

export default ToDoitems;

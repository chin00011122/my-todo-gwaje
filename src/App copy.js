import { useState } from "react";


//function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo===""){ 
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);
    setTodo("");

  }
  console.log(toDos);
  return (
    <div>
      <h1>My To Do List  [{toDos.length}]</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write you to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>{toDos.map((item,index)=>(
        <li key={index}>{item}</li>))}</ul>
    </div>
  );
}

//export default App;

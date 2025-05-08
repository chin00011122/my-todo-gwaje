import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
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
        <TodoForm toDo={toDo} onChange={onChange} onSubmit={onSubmit} />
        <hr/>
        <TodoList toDos={toDos}/>
    </div>
  );
}

export default App;

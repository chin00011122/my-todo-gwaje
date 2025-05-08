import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { H1, Div} from "./components/styles";
function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useLocalStorage("toDos", []);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(currentArray => [...currentArray, toDo]);
    setTodo("");

  }
  //Delete 기능 구현
  const onDelete = (index) => {
    setToDos((currentArray) =>
      currentArray.filter((_, itemIndex) => itemIndex !== index)
    );
  }


  console.log(toDos);
  return (
    <Div>
      <H1>My To Do List  [{toDos.length}]</H1>
      <TodoForm toDo={toDo} onChange={onChange} onSubmit={onSubmit} />
      <hr />
      <TodoList toDos={toDos} onDelete={onDelete} />
    </Div>
  );
}

export default App;

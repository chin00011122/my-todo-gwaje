import TodoItem from "./TodoItem";


function TodoList(){
    return(
        <ul>
        {toDos.map((item, index) => (
            <li key={index}>{item}</li>))}
    </ul>
    )
}

export default TodoList;
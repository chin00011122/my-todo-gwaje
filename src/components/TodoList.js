//import TodoItem from "./TodoItem";


function TodoList({toDos}){
    return (
        <ul>
            {toDos.map((item, index) => (
                <li key={index}>{item}</li>))}
        </ul>
    )
}

export default TodoList;
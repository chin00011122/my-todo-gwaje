import TodoItem from "./TodoItem";


function TodoList({toDos,onDelete}){
    return (
        <ul>
            {toDos.map((item, index) => (
                <TodoItem key={index} toDo={item} onDelete={()=>onDelete(index)} />
            ))}
        </ul>
    )
}

export default TodoList;
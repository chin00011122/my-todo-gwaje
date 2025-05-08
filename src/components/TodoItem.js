

function TodoItem({toDo, onDelete}){
    return (
        <li>
            {toDo}
            <button onClick={onDelete}>X</button>
        </li>
    );
}

export default TodoItem;
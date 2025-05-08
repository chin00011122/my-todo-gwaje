

function TodoItem({toDo, onDelete}){
    return (
        <li>
            {toDo}
            <button onClick={onDelete}>❌</button>
        </li>
    );
}

export default TodoItem;


function TodoItem() {
    return (
        <ul>
            {toDos.map((item, index) => (
                <li key={index}>{item}</li>))}
        </ul>
    )
}

export default TodoItem;
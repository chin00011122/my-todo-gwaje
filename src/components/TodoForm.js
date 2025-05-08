
function TodoForm({ toDo, onChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <input
                onChange={onChange}
                value={toDo}
                type="text"
                placeholder="Write your to do..."
            />
            <button>Add To Do</button>
        </form>
    )
}

export default TodoForm;
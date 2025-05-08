import {Button,Li} from "./styles"

function TodoItem({toDo, onDelete}){
    return (
        <Li>
            {toDo}
            <Button onClick={onDelete}>❌</Button>
        </Li>
    );
}

export default TodoItem;
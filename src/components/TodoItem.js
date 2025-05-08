import {Button,Li} from "./styles"

function TodoItem({toDo, onDelete, index}){
    return (
        <Li>
            <Button>{index+1}</Button>  {toDo}
            <Button onClick={onDelete}>❌</Button>
        </Li>
    );
}

export default TodoItem;
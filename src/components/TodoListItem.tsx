import { ChangeEvent, VFC } from "react";
import { Todo } from "../lib/todo"

type Props = {
    todo: Todo;
    onChangeDone: (todoId: Todo["id"], done: boolean) => void;
}

export const TodoListItem: VFC<Props> = ({ todo, onChangeDone }) => {
    const handleChangeTodo = (event: ChangeEvent<HTMLInputElement>) => {
        const changedTodoId = event.currentTarget.value;
        const checked = event.currentTarget.checked;

        onChangeDone(changedTodoId, checked);
    };
    return (
        <li key={todo.id}>
            <label>
                <input
                    type="checkbox"
                    checked={todo.done}
                    value={todo.id}
                    onChange={handleChangeTodo}
                />
                {todo.title}
            </label>
        </li>
    );
};
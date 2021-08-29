import { VFC } from "react";
import { Todo } from "../lib/todo";
import { TodoListItem } from "./TodoListItem";

type Props = {
    todoList: Todo[];
    onChangeDone: (todoId: Todo["id"], done: boolean) => void;
};

export const TodoList: VFC<Props> = ({ todoList, onChangeDone }) => {
    return (
        < ul >
            {todoList.map((todo) => (
                <TodoListItem todo={todo} onChangeDone={onChangeDone} key={todo.id} />
        ))}
    </ul>
    );
};
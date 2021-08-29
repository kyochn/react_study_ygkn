import { useState, VFC } from "react";
import { Todo } from "../lib/todo";
import { NewTodo } from "./NewTodo";

export const App: VFC = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    return (
        <div>
            <NewTodo
                onAdd={(title) => [
                    setTodoList((oldTodoList) => [
                        ...oldTodoList,
                        {
                            title,
                            done: false,
                            id: Math.random().toString(),
                        },
                    ])
                ]}
            />
            <ul>
                {
                    todoList.map((todo) => (
                        <li key={todo.id}>{todo.title}</li>
                    ))
               } 
            </ul>
        </div>
    );
};

import { useState, VFC } from "react";
import { Todo } from "../lib/todo";
import { NewTodo } from "./NewTodo";

export const App: VFC = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    const addTodo = (title: string) => {
        const newTodo = {
          title,
          done: false,
          id: Math.random().toString(),
        };
    
        setTodoList((oldTodoList) => [...oldTodoList, newTodo]);
    };

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
                        <li key={todo.id}>
                            <input type="checkbox" checked={todo.done} />
                            {todo.title}
                        </li>
                    ))
               } 
            </ul>
        </div>
    );
};

import { ChangeEvent, useState, VFC } from "react";
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

    const handleChangeTodo = (event: ChangeEvent<HTMLInputElement>) => {
        const checked = event.currentTarget.checked;
        const changedTodoId = event.currentTarget.value;

        setTodoList((oldTodoList) =>
            oldTodoList.map((todo) => {
                if (todo.id !== changedTodoId) {
                    return todo;
                }

                return { ...todo, done: checked };
            })
        );
    };

    return (
        <div>
            <NewTodo onAdd={addTodo}/>
            <ul>
                {
                    todoList.map((todo) => (
                        <li key={todo.id}>
                            <input type="checkbox"
                                checked={todo.done}
                                value={todo.id}
                                onChange={handleChangeTodo}
                            />
                            {todo.title}
                        </li>
                    ))
               } 
            </ul>
        </div>
    );
};

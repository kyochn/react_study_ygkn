import { ChangeEvent, useState, VFC } from "react";
import { Todo } from "../lib/todo";
import { NewTodo } from "./NewTodo";
import { TodoList } from "./TodoList";

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

    const handleChangeDone = (todoId: Todo["id"], done: boolean) => {
        setTodoList((oldTodoList) =>
            oldTodoList.map((todo) => {
                if (todo.id !== todoId) {
                    return todo;
                }

                return { ...todo, done};
            })
        );
    };

    return (
        <div>
            <NewTodo onAdd={addTodo}/>
            <TodoList todoList={todoList} onChangeDone={handleChangeDone} />
        </div>
    );
};

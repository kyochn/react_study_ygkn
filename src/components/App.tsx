import { VFC } from "react";
import { NewTodo } from "./NewTodo";

export const App: VFC = () => {
    return (
        <div>
            <NewTodo
                onAdd={(title) => console.log(title)}
            />
        </div>
    );
};

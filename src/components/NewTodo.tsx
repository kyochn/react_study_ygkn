import { VFC } from "react";

export const NewTodo: VFC = () => {
    return (
        <form>
            <input type="text" name="title" />
            <button type="submit">追加</button>
        </form>
    );
};
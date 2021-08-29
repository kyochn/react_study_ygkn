import { FormEvent, useState, VFC } from "react";

export const NewTodo: VFC = () => {
    const [title, setTitle] = useState<string>("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" onChange={(event) => setTitle(event.currentTarget.value)} value={title}/>
            <button type="submit">追加</button>
        </form>
    );
};
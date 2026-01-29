import { useEffect, useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        Promise.resolve(['1', '2', '3']).then((res) => setTodos(res));
    }, []);

    const remove = (item) => {
        console.log(item);
        setTodos((todos) => {
            const newTodos = [...todos];
            return newTodos.filter((t) => t !== item);
        });
    };

    return (
        <div>
            <input
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    const value = input;
                    setTodos([...todos, value]);
                    setInput('');
                    Promise.resolve().catch(() => {
                        remove(value);
                    });
                }}
            >
                添加
            </button>

            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo}
                        onClick={() => {
                            remove(todo);
                        }}
                    >
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
};
import { useEffect } from "react"

export const TodoList = () => {
    // 先放一个空数组作为初始值
    const [todos, setTodos] = useState([])
    // useEffect 会在组件挂载后执行，这里我们用它来发起请求
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            // 这里是把数据放到 todos 里
            .then(json => {
                setTodos(json)
            });
    }, [])
    return (<ul>
        {/* 如果 todos 有数据，就把数据展示出来，否则展示 Loading... */}
        {todos.length > 0
            ? todos.map(todo => <li key={todo.id}>{todo.title}</li>)
            : <li>Loading...</li>
        }
    </ul>)
}

import "./styles.css";
import { useState } from "react";

const LoginForm = () => {
    // 这里我们用 useState 来定义两个变量，一个是用户名，一个是密码
    // 然后让这两个状态分别跟两个 input 绑定
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // 这里我们用一个状态来表示是否正在提交，我们不会希望用户对一个表单在一秒内提交两次
    // 这个可以用于禁用提交按钮
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        // 先设置为正在提交
        setIsSubmitting(true);
        fetch("https://baidu.com", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                "Content-type": "application/json;",
            },
        })
            .then((response) => response.json())
            .then(() => {
                window.location.href = "/app";
            })
            .catch((e) => {
                console.error(e);
                // 最好给用户一个提示，告诉他提交失败了
                alert("提交失败");
            })
            .finally(() => {
                // 记得提交结束后要设置为不在提交状态，无论成功还是失败
                setIsSubmitting(false);
            });
    };

    return (
        <div>
            {/* 通过这样设置 value 并监听 onChange 事件，我们就可以实现用户输入的东西被实时更新到 state 上 */}
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
            <button
                // 如果已经点过一次了，就禁用按钮，直到上次的提交结束
                disabled={isSubmitting}
                // 点一下就提交
                onClick={() => {
                    submit();
                }}
            >
                submit
            </button>
        </div>
    );
};

export default function App() {
    return <LoginForm />;
}

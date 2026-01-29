import "./styles.css";
import { useState, useRef } from "react";

const LoginForm = () => {
    // 我们这里先创建两个 ref 来存用户名输入框和密码输入框的引用
    const usernameInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        // 这里我们通过 ref 来获取输入框的值
        // usernameInputRef.current 是输入框的 dom 元素
        const username = usernameInputRef.current.value;
        const password = passwordInputRef.current.value;
        setIsSubmitting(true);
        if (!username || !password) {
            // 做个检查，如果用户名或密码为空，就不提交
            // 就可以省去提交一次后端
            alert("输入错误");
            setIsSubmitting(false);
            return;
        }
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
                alert("提交失败");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div>
            {/* 这里我们把 ref 绑定到输入框上 */}
            {/* 之后我们就可以通过 ref.current 获取到输入框的值 */}
            <input ref={usernameInputRef} />
            <input ref={passwordInputRef} />
            <button
                disabled={isSubmitting}
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

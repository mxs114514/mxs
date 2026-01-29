import { useRef, useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);
    const start = () => {
        intervalRef.current = window.setInterval(() => {
            console.log("tick");
        }, 1000);
    };
    const stop = () => {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
    };
    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                    // 无论我们如何更新状态，函数如何重新执行
                    // intervalRef.current 都是我们上次设置的值
                }}
            >
                {count}
            </button>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
        </div>
    );
}

// 相当于在 class component 里：
class Counter extends React.Component {
    // 同样因为这个不在 state 里，因此如何更新都不会重新更新 UI
    interval = null;

    start() {
        this.interval = setInterval(() => {
            console.log("tick");
        }, 1000);
    }

    stop() {
        window.clearInterval(this.interval);
        this.interval = null;
    }

    render() {
        return (
            <div>
                <button onClick={() => this.start()}>start</button>
                <button onClick={() => this.stop()}>stop</button>
            </div>
        );
    }
}

export default function App() {
    return (
        <div>
            <div>
                class
                <Counter />
            </div>
            <div>
                fc
                <CounterFC />
            </div>
        </div>
    );
}
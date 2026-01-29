import React, { useState } from "react";

const CounterFC = () => {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>add {count}</button>;
};

// 相当于在 class component 里：

class Counter extends React.Component {
    state = {
        // 初始值
        count: 0,
    };

    render() {
        return (
            <button
                onClick={() => {
                    this.setState({
                        ...this.state,
                        count: this.state.count + 1,
                    });
                }}
            >
                add {this.state.count}
            </button>
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

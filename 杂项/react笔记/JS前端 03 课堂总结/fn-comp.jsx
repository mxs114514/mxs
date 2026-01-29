import React, { useState } from 'react';

const Counter = ({ initValue = 0 }) => {
  // 使用 useState 钩子初始化 count 状态
  const [count, setCount] = useState(initValue);

  // 定义处理增加和减少的函数
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // 渲染组件
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default function App() {
  return <Counter />;
}

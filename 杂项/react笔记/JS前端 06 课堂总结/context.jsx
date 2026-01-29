import { useState, createContext, useContext } from "react";
import "./styles.css";

// 可以理解为 createContext 返回了一个符号
// 用于标识 context，让 React 知道该给你提供哪个 context
const PageContext = createContext();

const Father = () => {
  const [count, setCount] = useState(0);
  return (
    // 所有想要消费 context 的组件都需要包裹在 Provider 里
    <PageContext.Provider
      value={{
        // 我们直接将状态的值和修改状态的函数传给了 context
        count: count,
        setCount: setCount,
      }}
    >
      <Count />
      <Controller />
    </PageContext.Provider>
  );
};

const Count = () => {
  // 我们在下游的组件通过 useContext 来获取 context 的内容
  // 无需使用 props 让代码更简洁并且更少出错
  const { count } = useContext(PageContext);
  return <p>{count}</p>;
};

const Controller = () => {
  const { setCount } = useContext(PageContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => ++c);
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default function App() {
  return <Father />;
}
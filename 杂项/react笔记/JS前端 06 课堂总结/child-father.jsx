import { useState } from "react";
import "./styles.css";

const Father = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  // 我们定义一下如何让子组件修改父组件的状态
  const add = () => {
    setCount((c) => ++c);
  };
  const add2 = () => {
    setCount2((c) => ++c);
  };
  return (
    <ul>
      {/* 然后把这个函数传给子组件 */}
      <Child count={count} add={add}>
        第一个
      </Child>
      <Child count={count2} add={add2}>
        第二个
      </Child>
    </ul>
  );
};

const Child = (props) => {
  return (
    // 我们在子组件里调用父组件传过来的函数
    // 来修改父组件的状态
    <li onClick={props.add}>
      {props.children} {props.count}
    </li>
  );
};

export default function App() {
  return <Father />;
}
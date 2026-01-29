import { useState } from "react";
import "./styles.css";

const Father = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((c) => ++c);
  };
  return (
    <ul onClick={add}>
      <Child count={count}>第一个</Child>
      <Child count={count}>第二个</Child>
    </ul>
  );
};

const Child = (props) => {
  return (
    <li>
      {props.children} {props.count}
    </li>
  );
};

export default function App() {
  return <Father />;
}
import React from "react";

export class Counter extends React.Component {
  // 我们可以在这里初始化创建 state
  state = {
    count: 0,
  };

  constructor({ initValue }) {
    super();
    // 我们也可以用用户传的值来初始化 state 里的 count
    this.state = {
      ...this.state,
      count: initValue ?? 0,
    };
  }

  // 元素的点击事件，我们放在类的方法上，比较方便整理，也方便拿到当前类继承来的一些方法
  increment() {
    // 从 React.Component 继承来的方法，用途是更新当前组件的 state，然后重新运行 `this.render` 来更新页面上的 UI。
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      ...this.state,
      count: this.state.count - 1,
    });
  }

  // 定义这个组件用了什么元素
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.increment();
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            this.decrement();
          }}
        >
          decrement
        </button>
      </div>
    );
  }
}

export default function App() {
  return <Counter />;
}

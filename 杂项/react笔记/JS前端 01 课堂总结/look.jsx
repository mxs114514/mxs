import React from "react";

export default function App() {
  // 声明状态
  const [count, setCount] = React.useState(0);

  // 声明状态，但是这是一个用于存储网络数据的状态
  const [list, setList] = React.useState([]);

  // 模拟网络请求
  React.useEffect(() => {
    Promise.resolve(["A", "B", "C"]).then((res) => {
      // 拿到数据后，更新状态
      setList(res);
    });
  }, []);

  // 模拟添加数据
  const add = (item) => {
    // 首先更改状态
    setList((prevList) => {
      const newList = [...prevList, item];
      return newList;
    });

    // 尝试跟后端同步数据，如果失败，回滚状态
    Promise.resolve().catch(() => {
      setList((prevList) => {
        const newList = prevList.filter((i) => i !== item);
        return newList;
      });
    });
  };

  // 渲染
  return (
    <div>
      <button
        // 点击按钮，更新状态
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          add("Z");
        }}
      >
        add
      </button>
      <ul>
        {list.map((i, idx) => (
          // 这是一个列表，点击列表项，删除对应的数据
          <li
            key={i + idx}
            onClick={() => {
              setList((prevList) => {
                const newList = prevList.filter((_, index) => index !== idx);
                return newList;
              });
            }}
          >
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

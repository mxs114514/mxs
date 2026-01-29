import React from "react";

const Navbar = (props) => {
  const { children } = props;
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "lightblue",
        padding: "1em",
        marginBottom: "1em",
      }}
    >
      {children}
    </nav>
  );
};

const NavbarItem = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        margin: "0 1em",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
};

const Button = (props) => {
  const { children } = props;
  return (
    <button
      style={{
        padding: "0.5em 1em",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      {children}
    </button>
  );
};

const Aside = (props) => {
  const { children } = props;
  return (
    <aside
      style={{
        width: "20%",
        padding: "1em",
        backgroundColor: "lightgrey",
      }}
    >
      {children}
    </aside>
  );
};

const Main = (props) => {
  const { children } = props;
  return (
    <main
      style={{
        width: "75%",
        padding: "1em",
        backgroundColor: "white",
      }}
    >
      {children}
    </main>
  );
};

const App = () => {
  return (
    <>
      <Navbar>
        <NavbarItem>首页</NavbarItem>
        <NavbarItem>关于</NavbarItem>
        <NavbarItem>
          <Button>Start</Button>
        </NavbarItem>
      </Navbar>
      <div
        style={{
          display: "flex",
        }}
      >
        <Aside>
          <ul>
            <li>简解</li>
            <li>安装</li>
            <li>使用</li>
            <li>API</li>
            <li>案例</li>
          </ul>
        </Aside>
        <Main>
          <h1>首页</h1>
          <p>欢迎来到本站！</p>
        </Main>
      </div>
    </>
  );
};

export default App;

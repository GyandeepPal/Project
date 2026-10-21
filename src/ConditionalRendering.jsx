import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  const [todo, settodo] = useState([
    {
      title: "Hey",
      dis: "I am a good",
    },
    {
      title: "Hey Another todo",
      dis: "I am a good too",
    },
    {
      title: "Hey I am Grocery",
      dis: "I am good but I am Grocery",
    },
  ]);

  const Todo = ({ todo }) => {
    return (
      <>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.dis}</div>
      </>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        fontFamily: "Arial",
      }}
    >
      <img src={reactLogo} width="100" alt="React Logo" />

      <h1>Vite + React</h1>

      {todo.map((item, index) => {
        return <Todo key={index} todo={item} />;
      })}

      <div
        style={{
          padding: "30px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import "./App.css";
import TextField from "./components/TextField";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myTodoList")) || [];
    setTodos(data);
  }, []);


  return (
    <div className="Container">
      <ul>
        {todos.map((todo) => (
          <li style={{ paddingTop: "18px" }}>
            <Todo
              todos={todos}
              setTodos={setTodos}
              id={todo.id}
              key={todo.id}
              content={todo.content}
              isDone={todo.isDone}
            />
          </li>
        ))}
      </ul>
      <div className="flex mt-8 w-[90%] items-center justify-center">
        <TextField text={text} setText={setText} />
        <button
          onClick={() => {
            let randId = Math.floor(Math.random() * 10100);

            todos.forEach((todo) => {
              if (todo.id === randId) {
                randId = Math.floor(Math.random() * 10100);
              }
            });

            setTodos(     [...todos, { id: randId, content: text, isDone: false }]   );
          }}
          className="border rounded-lg px-2 py-0.5 ml-4"
        >
          Add
        </button>
      </div>

      <div className="flex w-full justify-end">
        <button
          onClick={() =>
            localStorage.setItem("myTodoList", JSON.stringify(todos))
          }
          className="mt-16 border border-zinc-700 px-4 py-1 rounded-2xl"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default App;

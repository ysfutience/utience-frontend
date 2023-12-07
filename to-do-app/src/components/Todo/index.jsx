import "./index.css";

export default function Todo({ todos, setTodos, content, isDone, id }) {
  return (
    <div className="TodoContainer">
      <input
        className="checkInput"
        onChange={(e) => {
          todos.forEach((todo, index) => {
            if (todo.id === id) {
              const temp = [ ...todos ];
              temp[index].isDone = e.target.checked;
              setTodos(temp);
            }
          });
        }}
        type="checkbox"
        checked={isDone}
      />
      <div
        style={{
          paddingLeft: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="truncate w-40"> {content}</div>
      </div>
    </div>
  );
}

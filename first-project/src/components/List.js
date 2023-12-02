import { Input } from "antd";
import { useState } from "react";

const List = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "300px" }}
        />
        <button
          onClick={() => {
            setList(() => [...list, name]);
          }}
          className="ml-2 border rounded-lg w-12 bg-slate-200 border-red-400"
        >
          Add
        </button>
      </div>

      <div>
        <ul>
          {list.map((val) => (
            <li>{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default List;

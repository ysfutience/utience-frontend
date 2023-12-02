import { Button, Input } from "antd";
import "./style.css";

import logo from "../logo.svg";
import { useState, useEffect } from "react";

const Practice = () => {
  const [value, setValue] = useState("12");
  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState("red");

  // const [count, setCount] = useState(0);

  useEffect(() => {
    if (value.length > 4) {
      setColor("green");
    } else {
      setColor("red");
    }
    // console.log("test")
    return () => {
      console.log("unmounted");
    };
  }, [value]);

  return (
    <div className="container">
      <div style={{ backgroundColor: color, height: "50px", width: "50px" }}>
        {" "}
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <Input
          value={value}
          onChange={(event) => {
            console.log(event)
            setValue(event.target.value);
          }}
          placeholder="Please enter text"
          className="myinput"
        />
        <Button
          onClick={() => {
            setIsClicked(true);
          }}
          style={{ marginLeft: "12px" }}
        >
          Action!
        </Button>
      </div>
      <div>
        {isClicked
          ? value.length > 4
            ? value
            : "Please enter more than 4 characters"
          : ""}
      </div>
    </div>
  );
};

export default Practice;

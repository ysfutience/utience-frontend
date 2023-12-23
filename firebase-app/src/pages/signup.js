import { Button, Input } from "antd";
import { useState } from "react";

import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, mail, password);
    navigate("/login");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <Input
          placeholder="User Mail"
          onChange={(e) => setMail(e.target.value)}
          className="w-[300px]"
        />
        <Input
          type="password"
          className="mt-6 w-[300px]"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={signUp} className="w-40 mt-6">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

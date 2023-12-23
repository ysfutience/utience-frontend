import { Button, Input } from "antd";
import { useState } from "react";

import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    const res = await signInWithEmailAndPassword(auth, mail, password);
    localStorage.setItem("token", res.user.accessToken);
    navigate("/");
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
        <Button
          onClick={signUp}
          className="w-40 mt-6 bg-emerald-800 text-white"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}

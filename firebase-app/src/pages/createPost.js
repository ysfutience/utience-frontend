import { Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { addDoc, collection } from "firebase/firestore";

import { db } from "../config/firebase";
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const setOperation = async () => {
    await addDoc(collection(db, "sample"), {
      title: title,
      post: post,
    });

    alert("post created");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-1/3">
        Title:{" "}
        <Input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="please enter title"
        />
      </div>

      <div className="w-1/3 pt-10">
        Post:{" "}
        <TextArea
          onChange={(e) => setPost(e.target.value)}
          placeholder="please enter title"
        />
      </div>

      <div className="pt-6">
        <Button onClick={setOperation}>Create Post</Button>
      </div>
    </div>
  );
}

import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const getOperation = async () => {
    const querySnapshot = await getDocs(collection(db, "sample"));
    let _posts = [];

    querySnapshot.forEach((doc) => {
      _posts.push({
        id: doc.id,
        title: doc.data().title,
        post: doc.data().post,
      });
    });

    setPosts(_posts);
  };

  useEffect(() => {
    getOperation();
  }, []);

  return (
    <div className="w-3/4 m-auto h-screen">
      <div className="text-xl font-semibold pt-12 border-b mb-4">Posts</div>
      <div className="flex flex-col gap-7">
        {posts.map((post) => (
          <Post title={post.title} content={post.post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

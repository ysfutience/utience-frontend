import { List } from "antd";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState("");
  const [repos, setRepos] = useState([]);

  const getUserInfo = async () => {
    const res = await fetch("https://api.github.com/users/test");
    setUser(await res.json());
  };

  const getUsersRepos = async (url) => {
    const res = await fetch(url);
    setRepos(await res.json());
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (user.repos_url) {
      getUsersRepos(user.repos_url);
    }
  }, [user]);

  console.log(repos);

  return (
    <div className="flex px-8 pt-8 flex-col">
      <div className="flex">
        <img className="w-48 rounded-full" alt="avatar" src={user.avatar_url} />
        <div className="font-semibold pl-8 pt-4 text-xl">
          <div className="text-cyan-700">{user.login}</div>
          <div className="font-medium text-base">
            Followers: {user.followers}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="font-bold text-xl">Repositories</div>
        <div className="mt-4">
          <List
            bordered
            dataSource={repos}
            renderItem={(item) => (
              <List.Item>
                {item.name}
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}

import { useContext } from "react";
import { DataContext } from "..";
import { HomeOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const context = useContext(DataContext);

  const sidebar = [
    {
      title: "Home",
      to: "/home",
      key: "home",
      icon: <HomeOutlined className="text-xl text-[#7d8590]" />,
    },
    {
      title: "Profile",
      to: "/profile",
      key: "Profile",
      icon: <UserOutlined className="text-xl text-[#7d8590]" />,
    },
    {
      title: "Settings",
      to: "/settings",
      key: "settings",
      icon: <SettingOutlined className="text-xl text-[#7d8590]" />,
    },
  ];

  return (
    <div className="flex h-full min-h-screen flex-col bg-[#161c22] px-6 pt-3 border-slate-700 border-r">
      {sidebar.map((item) => (
        <Link
          to={item.to}
          key={item.key}
          onClick={() => {}}
          className="hover:opacity-60 text-slate-50 font-semibold py-2 border-0 flex items-center text-sm"
        >
          <span className="flex items-center">{item.icon}</span>
          <span className="pl-1.5 pt-1">{item.title}</span>
        </Link>
      ))}
    </div>
  );
}

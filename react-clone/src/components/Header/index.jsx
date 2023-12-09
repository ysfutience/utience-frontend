import { Link, useNavigate } from "react-router-dom";
import reactLogo from "../../logo.svg";
import Searchbar from "../Searchbar";
import { Bars3Icon, SunIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const navigate = useNavigate();

  const links = [
    {
      title: "Learn",
      key: "learn",
      to: "learn",
    },
    {
      title: "Reference",
      key: "reference",
      to: "reference",
    },
    {
      title: "Community",
      key: "community",
      to: "community",
    },
    {
      title: "Blog",
      key: "blog",
      to: "blog",
    },
  ];

  return (
    <div className="h-16 bg-bgColor flex items-center px-2 border-b border-[#2e3238]">
      <Bars3Icon className="w-6 text-white cursor-pointer hidden" />

      <img
        onClick={() => navigate("learn")}
        className="sepia cursor-pointer"
        src={reactLogo}
        alt="logo"
        width={64}
      />

      <Searchbar />

      <div className="text-[#ebecf0] text-[15px] font-semibold pl-4 flex items-center pr-4">
        {links.map((link) => (
          <Link
            key={link.key}
            className="h-10 py-3 px-4 rounded-full hover:bg-zinc-700 flex items-center"
            to={link.to}
          >
            {link.title}
          </Link>
        ))}
        <button className="pl-3">
          <SunIcon className="w-7" />
        </button>
      </div>
    </div>
  );
}

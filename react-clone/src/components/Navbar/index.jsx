import { Link } from "react-router-dom";

export default function Navbar() {
  const firstMenu = [
    {
      title: "Quick Start",
      key: "start",
      to: "quickStart",
    },
    {
      title: "Tutorial",
      key: "tutorial",
      to: "tutorial",
    },
    {
      title: "Thinking in React",
      key: "thinking",
      to: "thinkingInReact",
    },
    {
      title: "Installation",
      key: "installation",
      to: "installation",
    },
  ];
  return (
    <div className="w-[360px] h-screen">
      <div>
        <div className="font-bold text-[13px] pl-6 text-searchbarText">
          GET STARTED
        </div>
        <div className="flex flex-col pt-2">
          {firstMenu.map((item) => (
            <Link
              className="w-full hover:bg-slate-700 px-6 py-3.5 text-[13px] font-medium rounded-r-2xl "
              key={item.key}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}

import { Outlet } from "react-router-dom";

export default function Content() {
  return (
    <div className="w-full h-full">
      <Outlet />
    </div>
  );
}

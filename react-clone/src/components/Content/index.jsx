import { Outlet } from "react-router-dom";
import Footer from "../Footer";

export default function Content() {
  return (
    <div className="w-full px-16">
      <Outlet />
      <Footer />
    </div>
  );
}

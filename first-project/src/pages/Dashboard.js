import Content from "../layoutComponents/Content";
import Header from "../layoutComponents/Header";
import Sidebar from "../layoutComponents/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="grid grid-cols-10">
        <div className="col-span-2">
          <Sidebar />
        </div>

        <div className="col-span-8">
          <Content />
        </div>
      </div>
    </div>
  );
}

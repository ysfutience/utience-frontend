import Content from "../Content";
import Header from "../Header";
import Navbar from "../Navbar";

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="flex bg-bgColor text-stone-50 pt-8">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

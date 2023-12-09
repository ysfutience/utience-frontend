export default function Footer() {
  const list = ["Quick Start", "Installation", "Describing the UI"];

  return (
    <div className="border-t border-[#2e3238] h-[300px] mt-12 pt-8">
      <div className="font-semibold text-lg mb-2">Learn React</div>
      <ul>
        {list.map((item) => (
          <li
            key={item}
            className="pt-2.5 text-sm font-semibold hover:border-b w-fit cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

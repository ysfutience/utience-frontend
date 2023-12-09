import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Searchbar() {
  return (
    <div className="flex bg-searchbarColor w-full h-10 rounded-full px-4">
      <MagnifyingGlassIcon className="w-5 text-searchbarText" />
      <input placeholder="Search" className="bg-searchbarColor w-full focus:outline-none ml-3 text-white font-semibold text-sm" />
    </div>
  );
}

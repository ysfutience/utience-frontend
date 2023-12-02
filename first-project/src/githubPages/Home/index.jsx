import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [gists, setGists] = useState([]);

  const getGists = async () => {
    const res = await fetch("https://api.github.com/gists/public");
    setGists(await res.json());
  };

  useEffect(() => {
    getGists();
  }, []);

  console.log(gists);

  return (
    <div className="px-8 bg-[#161c22] text-slate-50 pb-12">
      <div className="font-bold text-2xl border-b border-b-stone-400 pt-10 mb-4">Gists</div>
      <div className="grid grid-cols-2 gap-x-20 gap-y-4">
        {gists.map((gist) => (
          <Link key={gist.id} className="col-span-1 border rounded-lg h-16 font-semibold border-stone-400 px-4 flex items-center truncate" to={gist.html_url}>{gist.owner.login}</Link>
        ))}
      </div>
    </div>
  );
}

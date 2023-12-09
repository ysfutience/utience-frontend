import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export default function Learn() {
  const [text, setText] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTextsHandler = async () => {
    const query = "https://baconipsum.com/api/?type=meat-and-filler";
    setIsLoading(true);
    const res = await fetch(query);
    setIsLoading(false);
    const data = await res.json();
    setText(data);
  };

  useEffect(() => {
    getTextsHandler();
  }, []);

  return (
    <div>
      <div className="flex items-center text-sky-500">
        <span className="font-bold text-[12px]">LEARN REACT </span>
        <ChevronRightIcon className="w-4" />
      </div>
      <h1 className="text-5xl font-bold pt-6">Quick Start</h1>
      {isLoading ? (
        <div className="mt-4 text-3xl">Loading...</div>
      ) : (
        <article>
          {text.map((item) => (
            <p key={item} className="pt-6 font-semibold text-sm leading-6">
              {item}
            </p>
          ))}
        </article>
      )}
    </div>
  );
}

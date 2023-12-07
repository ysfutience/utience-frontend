export default function TextField({ text, setText }) {
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="border border-slate-400 w-full resize-none h-[100px]"
    />
  );
}

export default function Post({ title, content }) {
  return (
    <div className="border rounded-lg h-36 px-4 py-2">
      <div className="font-semibold">{title}</div>
      <div className="pt-1 text-sm">{content}</div>
    </div>
  );
}

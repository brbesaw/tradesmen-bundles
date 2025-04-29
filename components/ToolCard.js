// components/ToolCard.js

export default function ToolCard({ level, name, url, comment }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded p-4 shadow-md">
      {/* Square placeholder image */}
      <div className="w-full aspect-square bg-zinc-800 text-zinc-400 text-center flex items-center justify-center rounded mb-3 text-xs">
        Image coming soon
      </div>

      {/* Tool level (e.g. Good / Better / Best) */}
      <p className="font-bold text-sm">{level}</p>

      {/* Tool name */}
      <p className="text-sm mb-1">{name}</p>

      {/* Optional comment */}
      {comment && (
        <p className="text-xs italic text-zinc-400 mb-2">{comment}</p>
      )}

      {/* Buy button */}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm underline"
        >
          Buy Now
        </a>
      )}
    </div>
  );
}

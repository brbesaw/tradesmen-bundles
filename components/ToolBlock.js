// components/ToolBlock.js

export default function ToolBlock({ title, options }) {
    return (
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="grid grid-cols-3 gap-4">
          {options.map((opt, idx) => (
            <div key={idx}>
              <div className="w-full aspect-[1/1.5] bg-gray-800 border border-gray-600 flex items-center justify-center mb-2">
                <p className="text-sm italic text-gray-400">Image coming soon</p>
              </div>
              <p><strong>{opt.label}:</strong> {opt.name}</p>
              {opt.link && (
                <a
                  href={opt.link}
                  target="_blank"
                  className="text-blue-400 underline"
                >
                  Buy on Amazon
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
  
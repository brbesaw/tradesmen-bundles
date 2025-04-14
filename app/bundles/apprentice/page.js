import Link from 'next/link';

const tools = [
  {
    name: 'Red Snips',
    quality: 'Good',
    url: '#',
  },
  {
    name: 'Green Snips',
    quality: 'Better',
    url: '#',
  },
  {
    name: 'Wiss M3R Snips',
    quality: 'Best',
    url: '#',
  },
  {
    name: 'Sheet Metal Hammer',
    quality: 'Good',
    url: '#',
  },
  {
    name: 'Sheet Metal Hammer - Heavy Duty',
    quality: 'Better',
    url: '#',
  },
  {
    name: 'Sheet Metal Hammer - Premium USA Made',
    quality: 'Best',
    url: '#',
  },
];

const groupedTools = tools.reduce((acc, tool) => {
  acc[tool.quality] = acc[tool.quality] || [];
  acc[tool.quality].push(tool);
  return acc;
}, {});

export default function ApprenticeBundle() {
  return (
    <main className="bg-black text-white min-h-screen py-10 px-4">
      <div className="max-w-xl mx-auto">
        <Link href="/" className="text-blue-400 hover:underline text-sm mb-4 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-center">Apprentice Toolbelt Bundle</h1>

        <section className="space-y-8">
          {['Good', 'Better', 'Best'].map((quality) => (
            <div key={quality}>
              <h2 className="text-xl font-semibold mb-2">{quality}</h2>
              <ul className="list-disc list-inside space-y-2">
                {groupedTools[quality]?.map((tool, index) => (
                  <li key={index}>
                    <a href={tool.url} className="text-blue-400 hover:underline">
                      {tool.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="text-center mt-10">
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Add Entire Bundle to Amazon Cart
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

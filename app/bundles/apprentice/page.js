import Link from 'next/link';

export default function ApprenticeBundle() {
  return (
    <main className="bg-black text-white min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-400 hover:underline text-sm mb-4 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-center">Apprentice Toolbelt Bundle</h1>

        <section className="space-y-12">

          {/* Example Tool: Sheet Metal Hammer */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Sheet Metal Hammer</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="#" className="bg-gray-800 p-4 rounded hover:bg-gray-700">
                <p className="font-bold text-blue-400">Good</p>
                <p>Basic Hammer – Brand X</p>
              </a>
              <a href="#" className="bg-gray-800 p-4 rounded hover:bg-gray-700">
                <p className="font-bold text-blue-400">Better</p>
                <p>Mid-Range Hammer – Brand Y</p>
              </a>
              <a href="#" className="bg-gray-800 p-4 rounded hover:bg-gray-700">
                <p className="font-bold text-blue-400">Best</p>
                <p>Pro Grade – Brand Z</p>
              </a>
            </div>
          </div>

          {/* Repeat for each tool */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Red/Green Snips</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="#" className="bg-gray-800 p-4 rounded hover:bg-gray-700">
                <p className="font-bold text-blue-400">Good</p>
                <p>Red/Green Snips – Basic Model</p>
              </a>
              <a href="#" className="bg-gray-800 p-4 rounded hover:bg-gray-700">
                <p className="font-bold text-blue-400">Better</p>
                <p>Mid-Tier Aviation Snips</p>
              </a>
              <a href="#" className="bg-gray-800 p-4 rounded hover:bg-gray-700">
                <p className="font-bold text-blue-400">Best</p>
                <p>Malco / Midwest Premium</p>
              </a>
            </div>
          </div>

          {/* You can continue adding more tools below using this format */}

          <div className="text-center mt-16">
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

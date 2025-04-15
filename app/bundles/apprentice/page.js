import Link from 'next/link';

export default function ApprenticeBundle() {
  return (
    <main className="bg-black text-white min-h-screen py-10 px-4">
      <div className="max-w-xl mx-auto">
        <Link href="/" className="text-blue-400 hover:underline text-sm mb-4 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-center">Apprentice Toolbelt Bundle</h1>

        <section className="space-y-10">
          {/* Tool List Section */}
          <div className="text-left">
            <ul className="list-disc list-inside space-y-2">
              <li><a href="#" className="text-blue-400 hover:underline">Red/Green Snips</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">Sheet Metal Hammer</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">Crescent Wrench (Small)</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">Medium Vise Grips</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">Small Flat Head Screwdriver</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">Duct Ripper / Demo Tool</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">25' Magnetic Tape Measure</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">Magnetic Torpedo Level</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">Drift Pin</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">3" Offset Flat Tongs</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">Impact Nut Driver Set (1/4", 5/16", 3/8") - Klein Tools 80182</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">Short Malco Flip Bit (1/4" - 5/16")</a></li>
              <li><a href="#" className="text-blue-400 hover:underline">Sharpies and Pencils</a></li>
            </ul>
          </div>

          {/* Toolbelt Section */}
          <div>
            <h2 className="text-2xl font-semibold mt-10 mb-4">Toolbelt</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Good:</p>
                <a href="#" className="text-blue-400 hover:underline">Bucket Boss Builder's Tool Belt</a>
              </div>
              <div>
                <p className="font-medium">Better:</p>
                <a href="#" className="text-blue-400 hover:underline">Occidental Leather 9855 Adjust-to-Fit</a>
              </div>
              <div>
                <p className="font-medium">Best:</p>
                <a href="#" className="text-blue-400 hover:underline">Occidental Leather 5590 M Electrician's Set</a>
              </div>
            </div>
          </div>

          {/* Tool Bag Section */}
          <div>
            <h2 className="text-2xl font-semibold mt-10 mb-4">Tool Bag</h2>
            <p className="text-sm text-gray-300 mb-2">Coming soon — we'll pull from the local union required list and fill in tools not already included in the toolbelt.</p>
          </div>

          {/* CTA Button */}
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

import Link from 'next/link';
import Image from 'next/image';

export default function ApprenticeBundle() {
  return (
    <main className="bg-black text-white min-h-screen py-10 px-4">
      <div className="max-w-xl mx-auto">
        <Link href="/" className="text-blue-400 hover:underline text-sm mb-4 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-center">Apprentice Toolbelt Bundle</h1>

        <section className="space-y-8">
          <div className="text-left">
            <ul className="list-disc list-inside space-y-2">
              <li><a href="#" className="text-blue-400 hover:underline">Red/Green Snips</a></li>
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

import Link from 'next/link';

export default function ApprenticePage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Home Button */}
      <div className="mb-4">
        <Link href="/" className="text-red-500 hover:underline">
          ← Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-4">Apprentice Tool Bundle</h1>
      {/* your existing content... */}
    </div>
  );
}
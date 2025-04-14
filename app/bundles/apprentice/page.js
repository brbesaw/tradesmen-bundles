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
          {/* Red/Green Snips */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Red/Green Snips</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>
                <span className="font-semibold">Good:</span>{' '}
                <a
                  href="https://amzn.to/3G92pGs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Wiss/Crescent Snips
                </a>
              </li>
              <li>
                <span className="font-semibold">Better:</span>{' '}
                <a
                  href="https://amzn.to/43UG6hw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Midwest Hardened Snips
                </a>
              </li>
              <li>
                <span className="font-semibold">Best:</span>{' '}
                <a
                  href="https://amzn.to/4ctYBvs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Klenk Red Snips
                </a>{' '}
                &amp;{' '}
                <a
                  href="https://amzn.to/4jb8gK4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Klenk Green Snips
                </a>
              </li>
            </ul>
          </div>

          {/* Sheet Metal Hammer */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Sheet Metal Hammer</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>
                <span className="font-semibold">Good:</span>{' '}
                <a
                  href="https://amzn.to/3ReccgK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Estwing Sheet Metal Hammer
                </a>
              </li>
              <li>
                <span className="font-semibold">Better:</span>{' '}
                <a
                  href="https://amzn.to/4jAAopD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Klenk Sheet Metal Hammer
                </a>
              </li>
              <li>
                <span className="font-semibold">Best:</span>{' '}
                <a
                  href="https://amzn.to/4jAAopD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Malco Sheet Metal Hammer
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

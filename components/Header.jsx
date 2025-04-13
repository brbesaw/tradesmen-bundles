import Link from "next/link";

export default function Header() {
  return (
    <header className="text-center py-8">
      <h1 className="text-4xl font-bold text-white mb-4">Tradesmen Tool Bundles</h1>
      <div className="flex justify-center space-x-6 text-lg font-semibold text-red-500">
        <Link href="/bundles/apprentice" className="hover:underline">Apprentice</Link>
        <Link href="/bundles/journeyman" className="hover:underline">Journeyman</Link>
        <Link href="/bundles/master" className="hover:underline">Master</Link>
      </div>
    </header>
  );
}

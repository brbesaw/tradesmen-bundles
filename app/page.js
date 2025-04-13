import Header from "../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="p-6">
        <Header />

        <section className="my-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Tool Talk</h2>
          <p className="text-lg text-gray-700">
            Join the conversation on the best tools, tips, and tricks for tradesmen at every level.
          </p>
        </section>

        <section className="mt-10 text-center">
          <h2 className="text-2xl font-bold mb-2">About</h2>
          <p className="text-md text-gray-600 max-w-xl mx-auto">
            This site is built for hardworking tradesmen — from apprentices just getting started, to master techs looking to upgrade their gear. We’re here to make finding the right tools fast, easy, and reliable.
          </p>
        </section>
      </div>
    </main>
  );
}

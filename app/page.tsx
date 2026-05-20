import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-6xl font-bold leading-tight">
          Build something scalable.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-zinc-400">
          Flexible Next.js starter architecture with Tailwind and Supabase.
        </p>

        <button className="mt-8 rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90">
          Get Started
        </button>
      </section>
    </main>
  );
}
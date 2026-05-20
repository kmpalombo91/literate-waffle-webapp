export default function Navbar() {
  return (
    <header className="border-b border-zinc-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-lg font-semibold">
          My Website
        </h1>

        <nav className="flex gap-6 text-sm text-zinc-400">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}
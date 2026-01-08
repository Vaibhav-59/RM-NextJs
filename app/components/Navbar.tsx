import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between mb-6">
      <Link href="/" className="font-bold text-xl sm:text-2xl">Resource Manager</Link>
      <Link
        href="/add"
        className="bg-white text-indigo-600 px-4 py-2 rounded-lg"
      >
        + Add Resource
      </Link>
    </nav>
  );
}

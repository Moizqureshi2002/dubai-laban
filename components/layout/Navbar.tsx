"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const normalize = (path: string) =>
    path === "/" ? "/" : path.endsWith("/") ? path : path + "/";

  const linkClass = (path: string) =>
    normalize(pathname) === normalize(path)
      ? "text-black font-semibold"
      : "text-gray-600 hover:text-black";

  return (
    <nav className="w-full border-b px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Dubai Laban
        </Link>

        <div className="flex gap-6">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/about/" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/menu/" className={linkClass("/menu")}>
            Menu
          </Link>
          <Link href="/contact/" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

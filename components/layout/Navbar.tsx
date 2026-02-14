"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import DLLogo from "../../public/duabi-laban-logo-bgremove.png"

export default function Navbar() {
  const pathname = usePathname();

  const normalize = (path: string) =>
    path === "/" ? "/" : path.endsWith("/") ? path : path + "/";

  const isActive = (path: string) =>
    normalize(pathname) === normalize(path);

  const linkClass = (path: string) =>
    `relative pb-1 transition-colors ${
      isActive(path)
        ? "text-black"
        : "text-gray-600 hover:text-black"
    }`;

  const underlineClass = (path: string) =>
    `absolute left-0 bottom-0 h-[2px] w-full bg-black transition-all duration-300 ${
      isActive(path) ? "scale-x-100" : "scale-x-0"
    } origin-left`;

  return (
    <nav className="w-full  px-6 py-4 fixed top-0 left-0">
      <div className="max-w-[90%] mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <Image
            src={DLLogo}
            alt="Dubai Laban Logo"
            width={120}
            height={40}
            priority
            className=" drop-shadow-2xl"
          />
        </Link>
        <div className="flex gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Menu", path: "/menu" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={linkClass(item.path)}
            >
              {item.name}
              <span className={underlineClass(item.path)} />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

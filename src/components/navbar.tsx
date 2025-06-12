import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const current = router.pathname;

  return (
    <nav className="w-full fixed top-0 left-0 bg-white border-b border-gray-200 px-8 py-4 z-50 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-900">Connor Kavleski</h1>
      <div className="space-x-6 text-gray-700 text-md">
        {[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
          { href: "/blog", label: "Blog" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${
              current === href
                ? "underline cursor-default text-black"
                : "hover:text-black transition"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

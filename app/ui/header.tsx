import ThemeSwitch from "@/app/ui/themeSwitch";
import Link from "next/link";
import { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 text-header-text border-b border-b-header-bottom z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-[var(--header-bg)]">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}

          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-semibold">
              Mitani
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                Home
              </Link>
              <Link
                href="/blogs"
                className="hover:opacity-80 transition-opacity"
              >
                Blogs
              </Link>
              {/* <Link
                href="/projects"
                className="hover:opacity-80 transition-opacity"
              >
                Projects
              </Link> */}
              <Link
                href="/about"
                className="hover:opacity-80 transition-opacity"
              >
                About
              </Link>
            </div>
          </div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

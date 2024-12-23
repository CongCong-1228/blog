import ThemeSwitch from "@/app/components/ThemeSwitch";
import Link from "next/link";
import { JSX } from "react";


export default function Header(): JSX.Element {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-header-bg text-header-text border-b border-header-bottom-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Link href="/blogs" className="hover:opacity-80 transition-opacity">
                Blogs
              </Link>
              <Link href="/projects" className="hover:opacity-80 transition-opacity">
                Projects
              </Link>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

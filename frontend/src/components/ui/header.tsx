import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-900/95">
      <div className="container mx-auto flex h-14 items-center px-4">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" to="/">
            <span className="hidden font-bold sm:inline-block text-gray-900 dark:text-white">
              Pattapon.dev
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              href="#about"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <button className="inline-flex items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-800 dark:text-gray-50 dark:hover:bg-gray-800">
            Resume
          </button>
        </div>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { Button } from "./button";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const handleOnclick = () => {
    console.log("click");
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
        <div className="hidden md:flex space-x-4 ml-auto">
          <a href="Resume - 2025.pdf" download="Resume - 2025.pdf">
            <Button onClick={handleOnclick} variant="outline">
              <Download />
              Download Resume
            </Button>
          </a>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

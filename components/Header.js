// components/Navbar.js

import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function Header() {
  return (
    <nav className="bg-primary/10 text-white px-4 pt-6">
      <div className="lg:container mx-auto lg:flex-row flex flex-col gap-2 justify-between items-center">
        <div className="text-2xl flex flex-row gap-2 font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-500 to-pink-500">
            AbdulQudus
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-accent to-blue-400">
            Ajape
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://instagram.com/devgorithm" target="_blank">
            <FaInstagram className="text-2xl hover:text-pink-500 transition-colors duration-300" />
          </Link>
          <Link href="https://x.com/devgorithm" target="_blank">
            <RiTwitterXLine className="text-2xl hover:text-blue-400 transition-colors duration-300" />
          </Link>
          <Link href="https://github.com/adevmister" target="_blank">
            <FaGithub className="text-2xl hover:text-gray-500 transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const linkClass =
    "relative text-[#29262A] hover:text-[#E8A0B8] transition duration-300 " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 " +
    "after:bg-[#E8A0B8] after:transition-all after:duration-300 " +
    "hover:after:w-full";

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF9F7]/90 px-4 py-3 backdrop-blur-md sm:px-6 sm:py-4 md:px-16">
      {/* Top Navbar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={closeMenu}>
          <img
            src="/images/sm-logo.png"
            alt="SM Logo"
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          <a href="#home" className={linkClass}>
            Home
          </a>

          <a href="#about" className={linkClass}>
            About
          </a>

          <a href="#skills" className={linkClass}>
            Skills
          </a>

          <a href="#experience" className={linkClass}>
            Experience
          </a>

          <a href="#projects" className={linkClass}>
            Projects
          </a>

          <a href="#contact" className={linkClass}>
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#29262A] transition hover:bg-[#F7DDE5] md:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-3 flex flex-col items-center gap-1 border-t border-[#7F9477]/20 pt-3">
          <a
            href="#home"
            onClick={closeMenu}
            className="w-full rounded-lg py-2 text-center text-sm text-[#29262A] transition hover:bg-[#F7DDE5] hover:text-[#E8A0B8]"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="w-full rounded-lg py-2 text-center text-sm text-[#29262A] transition hover:bg-[#F7DDE5] hover:text-[#E8A0B8]"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
            className="w-full rounded-lg py-2 text-center text-sm text-[#29262A] transition hover:bg-[#F7DDE5] hover:text-[#E8A0B8]"
          >
            Skills
          </a>

          <a
            href="#experience"
            onClick={closeMenu}
            className="w-full rounded-lg py-2 text-center text-sm text-[#29262A] transition hover:bg-[#F7DDE5] hover:text-[#E8A0B8]"
          >
            Experience
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="w-full rounded-lg py-2 text-center text-sm text-[#29262A] transition hover:bg-[#F7DDE5] hover:text-[#E8A0B8]"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="w-full rounded-lg py-2 text-center text-sm text-[#29262A] transition hover:bg-[#F7DDE5] hover:text-[#E8A0B8]"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
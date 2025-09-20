"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ShoppingCart, X, Menu } from "lucide-react";
import LogoIcon from "./Logo";

const defaultNavLinks = [
  { href: "#", label: "HOME" },
  { href: "#CONTACT", label: "CONTACT" },
];

export default function Navbar({
  navLinks = defaultNavLinks,
  cartItemCount = 0,
  cartTotal = 0.0,
  logoText = "E-Comm",
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLinks = ({ className }) => (
    <nav className={className}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className={`text-base  uppercase tracking-wider transition-colors ${
            pathname === link.href
              ? "text-forground"
              : "text-foreground hover:text-primary"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-background">
      <div className="container mx-auto flex h-18 items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-3">
          <LogoIcon size={30}/>
          <span className="text-xl font-bold text-foreground">{logoText}</span>
        </Link>

        <NavLinks className="hidden items-center gap-16 md:flex" />

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <ShoppingCart className="h-5 w-5 text-foreground cursor-pointer" />
            <span className="text-sm text-foreground cursor-pointer"> items</span>
            <span className="text-sm text-gray-500">
              ${cartTotal.toFixed(2)}
            </span>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background shadow-lg md:hidden">
          <NavLinks className="flex flex-col items-center gap-6 py-8" />
        </div>
      )}
    </header>
  );
}
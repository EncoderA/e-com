"use client";
import ColorSwitcher from "@/components/resuableUI/sidebar/ColorSwitcher";
import Image from "next/image";
import Navbar from "@/components/resuableUI/navbar/Navbar";
import Sidebar from "@/components/resuableUI/sidebar/Sidebar";
import SidebarToggle from "@/components/resuableUI/sidebar/SidebarToggle";
import Footer from "@/components/resuableUI/Footer";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";

export default function Home() {
  const navLinks = [
    { href: '#', label: "HOME" },
    { href: '#BAG', label: "BAG" },
    { href: '#SNEAKERS', label: "SNEAKERS" },
    { href: '#BELT', label: "BELT" },
    { href: '#CONTACT', label: "CONTACT" }
  ]

  return (
    <>
      <Navbar navLinks={navLinks} />
      <div className="container mx-auto">
        
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col w-full p-2">
            <HeroSection />
            <Products />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

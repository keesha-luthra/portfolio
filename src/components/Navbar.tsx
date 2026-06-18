"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  const links = [
    { label: "PROJECTS", href: "#projects", id: "projects" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "ACHIEVEMENTS", href: "#achievements", id: "achievements" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  if (pathname !== "/") {
    return (
      <nav className="fixed top-0 w-full z-50 bg-[#F9F9F9]/90 backdrop-blur-md border-b-[3px] border-[#4A3D3D] py-4">
        <div className="w-full px-6 md:px-12 lg:px-24 flex items-center pl-16 md:pl-24">
          <Link href="/" className="text-[#4A3D3D] font-sans tracking-widest text-sm md:text-base uppercase hover:opacity-70 transition-opacity">
            ← BACK TO HOME
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F9F9F9]/90 backdrop-blur-md border-b-[3px] border-[#4A3D3D] py-5">
      <div className="w-full px-6 md:px-12 lg:px-24 flex justify-center md:justify-start gap-8 md:gap-12 overflow-x-auto no-scrollbar pl-16 md:pl-24">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={() => setActiveSection(link.id)}
            className={`relative pb-1 font-sans text-sm md:text-base tracking-widest uppercase transition-colors whitespace-nowrap cursor-pointer ${
              activeSection === link.id
                ? "text-[#4A3D3D] font-medium"
                : "text-gray-500 hover:text-[#4A3D3D]"
            }`}
          >
            {link.label}
            {activeSection === link.id && (
              <motion.div
                layoutId="navbar-underline"
                className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#4A3D3D]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </a>
        ))}
      </div>
    </nav>
  );
}

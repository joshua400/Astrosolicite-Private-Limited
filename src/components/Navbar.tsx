import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Technology", href: "#technology" },
  { name: "Solutions", href: "#solutions" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Investors", href: "#investors" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass-panel border-b border-primary/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 relative overflow-hidden rounded-lg bg-black/40 border border-primary/30 p-1">
            <img src={logo} alt="Astrosolicite Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-foreground font-bold text-sm tracking-[0.25em] uppercase font-mono-tech">
              ASTRO<span className="text-primary italic">SOLICITE</span>
            </span>
            <span className="text-muted-foreground text-[9px] tracking-[0.1em] uppercase -mt-0.5">
              Protecting Orbits
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-[10.5px] tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-all duration-300 relative group font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-foreground p-1 hover:text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-primary/10 px-6 py-8 animate-fade-in">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-xs tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors p-2 block border-b border-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

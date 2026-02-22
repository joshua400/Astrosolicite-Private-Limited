import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-new.jpeg";
import { Magnetic, TextScramble, CharReveal } from "@/hooks/useAnimations";

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
      className={`fixed z-50 transition-all duration-500 rounded-full flex flex-col items-center border ${scrolled
        ? "top-4 w-[92%] md:w-[90%] max-w-6xl glass-panel border-primary/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] py-2 md:py-3 px-6 md:px-8"
        : "top-6 w-[95%] max-w-7xl bg-black/40 backdrop-blur-md border-white/10 shadow-lg shadow-black/20 py-3 md:py-4 px-6 md:px-10"
        } left-1/2 -translate-x-1/2`}
    >
      <div className="flex items-center justify-between w-full min-h-[40px]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-14 h-14 relative overflow-hidden rounded-md flex items-center justify-center p-0 transition-colors duration-500">
            <img src={logo} alt="Astrosolstice Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-baseline gap-1 md:gap-1.5 leading-none">
              <span className="text-foreground font-bold text-xs md:text-sm tracking-[0.2em] uppercase font-mono-tech">
                ASTRO
              </span>
              <span className="text-primary italic font-bold text-xs md:text-sm tracking-[0.1em] uppercase font-mono-tech">
                <CharReveal text="SOLSTICE" />
              </span>
            </div>
            <span className="text-muted-foreground text-[7px] md:text-[8px] tracking-[0.2em] uppercase mt-0.5 font-mono-tech">
              Protecting Orbits
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Magnetic>
                <a
                  href={item.href}
                  className="text-[10.5px] tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-all duration-300 relative group font-medium px-2 py-1"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden text-foreground p-1 hover:text-primary transition-colors h-10 w-10 flex items-center justify-center rounded-full hover:bg-white/5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Expansion */}
      {menuOpen && (
        <div className="xl:hidden w-full overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1 pt-4 pb-2 border-t border-white/10 mt-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-[9px] tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-all duration-300 px-3 py-2.5 block rounded-lg font-mono-tech border border-transparent hover:border-primary/10 hover:bg-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav >
  );
};

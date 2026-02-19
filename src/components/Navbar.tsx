import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Product", "Solution", "Mission", "Vision", "About us", "Career", "Contact us"];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/60 shadow-[0_2px_30px_hsl(180_80%_50%/0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 relative">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_6px_hsl(180_80%_50%/0.7)]">
              <path d="M20 4 L28 16 L20 36 L12 16 Z" fill="hsl(180,80%,50%)" opacity="0.95"/>
              <circle cx="20" cy="14" r="4" fill="hsl(180,80%,70%)"/>
              <path d="M8 20 Q12 14 20 14 Q28 14 32 20" stroke="hsl(180,80%,50%)" strokeWidth="1.5" fill="none" opacity="0.6"/>
            </svg>
          </div>
          <div>
            <span className="text-foreground font-bold text-sm tracking-[0.2em] uppercase">SPACEMANCRAFT</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`text-xs tracking-[0.12em] uppercase transition-all duration-200 relative group ${
                  item === "Home"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ${
                  item === "Home" ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground p-1 hover:text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border/40 px-6 py-6 animate-fade-in">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`text-sm tracking-[0.1em] uppercase transition-colors ${
                    item === "Home" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

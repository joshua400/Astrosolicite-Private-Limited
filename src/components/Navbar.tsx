import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Product", "Solution", "Mission", "Vision", "About us", "Career", "Contact us"];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M20 4 L28 16 L20 36 L12 16 Z" fill="hsl(180,80%,50%)" opacity="0.9"/>
              <circle cx="20" cy="14" r="4" fill="hsl(180,80%,50%)"/>
              <path d="M8 20 Q12 14 20 14 Q28 14 32 20" stroke="hsl(180,80%,50%)" strokeWidth="1.5" fill="none" opacity="0.5"/>
            </svg>
          </div>
          <div>
            <span className="text-foreground font-bold text-sm tracking-widest uppercase">SPACEMANCRAFT</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`text-sm tracking-wide transition-colors hover:text-primary ${item === "Home" ? "text-primary border-b border-primary pb-1" : "text-muted-foreground"}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border/40 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`text-sm tracking-wide transition-colors hover:text-primary ${item === "Home" ? "text-primary" : "text-muted-foreground"}`}
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

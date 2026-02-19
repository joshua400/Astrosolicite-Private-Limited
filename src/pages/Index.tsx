import { Navbar } from "@/components/Navbar";
import { EarthHero } from "@/components/EarthHero";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Satellite, Shield, Waves, Moon, Database, Rocket, ChevronDown } from "lucide-react";

// Static stars - generated once outside component to avoid re-render randomness
const HERO_STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  width: (((i * 17 + 3) % 20) / 10 + 0.5),
  height: (((i * 13 + 7) % 20) / 10 + 0.5),
  top: ((i * 37 + 11) % 100),
  left: ((i * 53 + 19) % 100),
  opacity: ((i * 23 + 5) % 8) / 10 + 0.1,
  delay: (i * 0.4) % 4,
}));

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex items-center justify-center star-bg overflow-hidden">
        {/* Static twinkling stars */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {HERO_STARS.map((s) => (
            <div
              key={s.id}
              className="absolute rounded-full bg-foreground"
              style={{
                width: `${s.width}px`,
                height: `${s.height}px`,
                top: `${s.top}%`,
                left: `${s.left}%`,
                opacity: s.opacity,
                animation: `twinkle-anim ${2 + s.delay}s ease-in-out infinite`,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Deep space radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_60%,hsl(180_80%_50%/0.04)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left: text */}
          <div className="flex flex-col gap-8 md:pr-8">
            <div className="inline-flex items-center gap-2 text-primary text-xs tracking-[0.3em] uppercase opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <span className="w-8 h-px bg-primary inline-block" />
              Electric Propulsion Pioneer
            </div>

            <h1
              className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-foreground leading-tight opacity-0 animate-fade-up"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              REVOLUTIONIZING<br />
              <span className="text-gradient">ORBITS</span>
            </h1>

            <p
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md opacity-0 animate-fade-up"
              style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
            >
              At Spaceman Craft Private Limited, we are on a mission to change the way humanity moves in space.
              With our breakthrough electric thruster technology, we are bringing a true revolution to orbital systems.
            </p>

            <div
              className="flex flex-wrap gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm tracking-widest uppercase glow-primary"
              >
                Discover Our Thruster <ArrowRight size={16} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/30 text-foreground hover:border-primary hover:text-primary px-8 py-6 text-sm tracking-widest uppercase"
              >
                Learn More
              </Button>
            </div>

            {/* Stats row */}
            <div
              className="grid grid-cols-3 gap-4 pt-4 border-t border-border/40 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.75s", animationFillMode: "forwards" }}
            >
              {[
                { label: "Thrust Efficiency", value: "98%" },
                { label: "Mass Reduction", value: "60%" },
                { label: "Mission Life", value: "3×" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-primary text-xl font-bold tracking-wide">{s.value}</p>
                  <p className="text-muted-foreground text-xs tracking-widest uppercase mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Earth */}
          <div
            className="relative flex items-center justify-center h-[480px] opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <EarthHero />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50 flex flex-col items-center gap-1 animate-bounce">
          <ChevronDown size={18} />
        </div>
      </section>

      {/* ── Product Section ── */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-2 flex items-center gap-2">
            <span className="w-6 h-px bg-primary" /> OUR PRODUCT
          </p>
          <div className="grid md:grid-cols-2 gap-16 items-center mt-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 text-foreground leading-tight">
                Electric Thruster System
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The Electric Thruster System by Spaceman Craft Pvt Ltd provides compact, efficient, and sustainable
                propulsion for satellites and spacecraft. It extends mission life while reducing costs and supporting
                orbital sustainability.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground tracking-widest uppercase">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-72 h-72">
                {/* Glow background */}
                <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl" />
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
                <div className="absolute inset-6 rounded-full border border-primary/15 animate-spin-reverse" />
                <div className="absolute inset-12 rounded-full border border-primary/10 animate-spin-slow" style={{ animationDuration: '12s' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Satellite size={72} className="text-primary opacity-80 drop-shadow-[0_0_12px_hsl(180_80%_50%/0.5)]" />
                </div>
                {/* Orbit dots */}
                <div className="absolute w-72 h-72 animate-spin-slow">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_hsl(180_80%_50%)]" />
                </div>
                <div className="absolute inset-6 animate-spin-reverse">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/70 shadow-[0_0_6px_hsl(180_80%_50%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video-Based Earth Observation ── */}
      <section className="py-24 px-6 bg-card border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-primary" /> SOLUTIONS <span className="w-6 h-px bg-primary" />
            </p>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-4">
              VIDEO BASED EARTH OBSERVATION
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We develop advanced video observation technologies that provide deeper insights across land, defense, and ocean domains.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Globe size={32} className="text-primary" />,
                title: "Hyperspectral Vision",
                desc: "Our Hyperspectral Vision technology captures light across hundreds of spectral bands, revealing details invisible to the human eye. It enables precise material identification and advanced imaging across agriculture, environmental monitoring, and defense.",
              },
              {
                icon: <Shield size={32} className="text-primary" />,
                title: "Defense Surveillance",
                desc: "Advanced surveillance solutions designed to strengthen national security with precision and reliability. From real-time monitoring to threat detection, we integrate cutting-edge technologies to ensure complete situational awareness.",
              },
              {
                icon: <Waves size={32} className="text-primary" />,
                title: "OceanNet",
                desc: "Ocean Net is designed to make oceans smarter and safer by mapping underwater resources with advanced sensing technology. It helps fishermen locate fish more efficiently and monitors marine activity in real time.",
              },
            ].map((card) => (
              <div key={card.title} className="bg-background border border-border/60 rounded-lg p-8 hover:border-glow transition-all duration-300 group">
                <div className="mb-5 p-3 rounded-md bg-primary/8 w-fit">{card.icon}</div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-foreground mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">{card.desc}</p>
                <a href="#" className="text-primary text-xs tracking-widest uppercase hover:underline flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Details <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision / Moon Section ── */}
      <section className="relative py-32 px-6 bg-background overflow-hidden star-bg">
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="absolute rounded-full bg-foreground"
              style={{
                width: `${(i % 2) + 0.5}px`,
                height: `${(i % 2) + 0.5}px`,
                top: `${(i * 37) % 100}%`,
                left: `${(i * 53) % 100}%`,
                opacity: ((i * 7) % 6) / 10 + 0.05,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(180_80%_50%/0.04)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-6 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-primary" /> OUR VISION <span className="w-6 h-px bg-primary" />
          </p>
          <h2 className="hero-title text-4xl md:text-6xl font-bold uppercase tracking-wider text-foreground mb-6">
            Our vision is to land on the Moon
          </h2>
          <p className="text-muted-foreground text-xl tracking-widest uppercase mb-16">
            Powered By Our Electric Thruster
          </p>
          <div className="flex items-center justify-center">
            <div className="relative w-52 h-52">
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-2xl" />
              <div className="absolute inset-0 rounded-full border border-primary/15 animate-spin-slow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Moon size={72} className="text-muted-foreground drop-shadow-[0_0_20px_hsl(180_80%_50%/0.3)]" />
              </div>
              {/* Rocket orbiting moon */}
              <div className="absolute w-52 h-52 animate-spin-slow" style={{ animationDuration: '8s' }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shadow-[0_0_10px_hsl(180_80%_50%)]">
                  <Rocket size={12} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Future Initiatives ── */}
      <section className="py-24 px-6 bg-card border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-primary" /> FUTURE INITIATIVES <span className="w-6 h-px bg-primary" />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground">Beyond the Horizon</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Globe size={28} className="text-primary" />,
                title: "VARSHA.AI",
                subtitle: "Rain of Space Data Intelligence",
                desc: "Orbital Data Centre Satellites powered by our electric thrusters.",
              },
              {
                icon: <Moon size={28} className="text-primary" />,
                title: "GOING TO THE MOON",
                subtitle: "From Earth to Moon",
                desc: "Powered by innovation in propulsion technology.",
              },
              {
                icon: <Database size={28} className="text-primary" />,
                title: "Data Centers in Space",
                subtitle: "Redefining Computing",
                desc: "Data centers in Moon and Space — the future of computing infrastructure.",
              },
              {
                icon: <Rocket size={28} className="text-primary" />,
                title: "Space Tourism",
                subtitle: "Your Next Destination",
                desc: "We believe space is not just for astronauts — it's for everyone.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-background border border-border/60 rounded-lg p-6 hover:border-glow transition-all duration-300 group">
                <div className="mb-4 p-2.5 rounded-md bg-primary/8 w-fit">{item.icon}</div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-1">{item.title}</h3>
                <p className="text-primary text-xs tracking-widest uppercase mb-3">{item.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                <a href="#" className="text-primary text-xs tracking-widest uppercase hover:underline flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore Now <ArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section className="py-24 px-6 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-primary" /> About Spaceman Craft
            </p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground mb-6 leading-tight">
              Redefining the Future of Space Technology
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are a team of innovators, engineers, and dreamers working together to redefine the future of space technology.
              From electric propulsion systems to CubeSats and lunar data centers, our projects are built to advance how humanity
              explores, communicates, and thrives in space.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground tracking-widest uppercase mt-4">
              Learn About Us <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Electric Thrusters", value: "Next-Gen" },
              { label: "CubeSat Missions", value: "In Dev" },
              { label: "Lunar Data Centers", value: "2030+" },
              { label: "Space Tourism", value: "Coming" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border/60 rounded-lg p-6 text-center hover:border-glow transition-all duration-300">
                <p className="text-primary text-lg font-bold tracking-widest">{stat.value}</p>
                <p className="text-muted-foreground text-xs tracking-widest uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Section ── */}
      <section className="py-24 px-6 bg-card border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-primary" /> THE BLOGS <span className="w-6 h-px bg-primary" />
            </p>
            <h2 className="text-3xl font-bold uppercase tracking-wider text-foreground">Latest Insights</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Insights, deep-dives, and mission updates from the frontier of space technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "The Future of Electric Propulsion in Space", date: "Feb 2026", tag: "Technology" },
              { title: "CubeSats and the Democratization of Space", date: "Jan 2026", tag: "Innovation" },
              { title: "Why Lunar Data Centers Are the Next Frontier", date: "Dec 2025", tag: "Vision" },
            ].map((post) => (
              <div key={post.title} className="bg-background border border-border/60 rounded-lg overflow-hidden hover:border-glow transition-all duration-300 group cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-primary/10 via-background to-background flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(180_80%_50%/0.08),transparent_70%)]" />
                  <Satellite size={48} className="text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary text-xs tracking-widest uppercase border border-primary/30 px-2 py-0.5 rounded">{post.tag}</span>
                    <span className="text-muted-foreground text-xs">{post.date}</span>
                  </div>
                  <h3 className="text-foreground font-semibold leading-snug mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <a href="#" className="text-primary text-xs tracking-widest uppercase flex items-center gap-1 hover:gap-2 transition-all hover:underline">
                    Read More <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="relative py-32 px-6 bg-background border-t border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,hsl(180_80%_50%/0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-6 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-primary" /> GET IN TOUCH <span className="w-6 h-px bg-primary" />
          </p>
          <h2 className="hero-title text-3xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-6">
            Ready to Join the Revolution?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Partner with us to push the boundaries of what's possible in space.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-sm tracking-widest uppercase glow-primary">
            Contact Us <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border/40 bg-card py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold tracking-[0.2em] uppercase text-foreground text-sm">SPACEMANCRAFT</p>
            <p className="text-muted-foreground text-xs mt-1 tracking-widest">Revolutionizing Orbits</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["Product", "Solution", "Mission", "Vision", "Contact us"].map((item) => (
              <a key={item} href="#" className="text-muted-foreground text-xs tracking-widest uppercase hover:text-primary transition-colors">{item}</a>
            ))}
          </div>
          <p className="text-muted-foreground text-xs tracking-widest">© 2026 Spaceman Craft Pvt Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

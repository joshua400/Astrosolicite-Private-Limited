import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Satellite, Shield, Waves, Moon, Database, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center star-bg overflow-hidden">
        {/* Animated stars */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 2 + 0.5}px`,
                height: `${Math.random() * 2 + 0.5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.1,
              }}
            />
          ))}
        </div>

        {/* Subtle glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-[0.15em] mb-8 text-foreground">
            REVOLUTIONIZING ORBITS
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            At Spaceman Craft Private Limited, we are on a mission to change the way humanity moves in space.
            With our breakthrough electric thruster technology, we are bringing a true revolution to orbital systems.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-base tracking-widest uppercase"
          >
            Discover Our Thruster
          </Button>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-2">OUR PRODUCT</p>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 text-foreground">
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
              {/* Satellite illustration */}
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
                <div className="absolute inset-4 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Satellite size={80} className="text-primary opacity-80" />
                </div>
                {/* Orbit dots */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/60" />
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/60" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video-Based Earth Observation */}
      <section className="py-24 px-6 bg-card border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-4">
              VIDEO BASED EARTH OBSERVATION
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We develop advanced video observation technologies that provide deeper insights across land, defense, and ocean domains.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={card.title} className="bg-background border border-border/60 rounded-lg p-8 hover:border-primary/50 transition-colors group">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-foreground mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-6">{card.desc}</p>
                <a href="#" className="text-primary text-sm tracking-widest uppercase hover:underline flex items-center gap-2">
                  View Details <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-32 px-6 bg-background overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 1.5 + 0.5}px`,
                height: `${Math.random() * 1.5 + 0.5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6">OUR VISION</p>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-foreground mb-6">
            Our vision is to land on the Moon
          </h2>
          <p className="text-muted-foreground text-xl tracking-widest uppercase">
            Powered By Our Electric Thruster
          </p>
          <div className="mt-16 flex items-center justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full border border-primary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Moon size={64} className="text-muted-foreground" />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Rocket size={16} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VARSHA.AI + Future Sections */}
      <section className="py-24 px-6 bg-card border-t border-border/40">
        <div className="max-w-7xl mx-auto">
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
              <div key={item.title} className="bg-background border border-border/60 rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground mb-1">{item.title}</h3>
                <p className="text-primary text-xs tracking-widest uppercase mb-3">{item.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                <a href="#" className="text-primary text-xs tracking-widest uppercase hover:underline flex items-center gap-1">
                  Explore Now <ArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">About Spaceman Craft</p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-foreground mb-6">
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
              <div key={stat.label} className="bg-card border border-border/60 rounded-lg p-6 text-center">
                <p className="text-primary text-lg font-bold tracking-widest">{stat.value}</p>
                <p className="text-muted-foreground text-xs tracking-widest uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-6 bg-card border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">The Blogs</p>
            <h2 className="text-3xl font-bold uppercase tracking-wider text-foreground">
              Latest Insights
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A blog is like your brand's personal journal — but online, public, and packed with valuable content that educates, inspires, or connects with your audience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "The Future of Electric Propulsion in Space", date: "Feb 2026", tag: "Technology" },
              { title: "CubeSats and the Democratization of Space", date: "Jan 2026", tag: "Innovation" },
              { title: "Why Lunar Data Centers Are the Next Frontier", date: "Dec 2025", tag: "Vision" },
            ].map((post) => (
              <div key={post.title} className="bg-background border border-border/60 rounded-lg overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer">
                <div className="h-40 bg-gradient-to-br from-primary/10 to-background flex items-center justify-center">
                  <Satellite size={48} className="text-primary/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary text-xs tracking-widest uppercase">{post.tag}</span>
                    <span className="text-muted-foreground text-xs">{post.date}</span>
                  </div>
                  <h3 className="text-foreground font-semibold leading-snug mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <a href="#" className="text-primary text-xs tracking-widest uppercase flex items-center gap-1 hover:underline">
                    Read More <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 bg-background border-t border-border/40">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-6">
            Ready to Join the Revolution?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Partner with us to push the boundaries of what's possible in space.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-base tracking-widest uppercase">
            Contact Us <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold tracking-widest uppercase text-foreground">SPACEMANCRAFT</p>
            <p className="text-muted-foreground text-sm mt-1">Revolutionizing Orbits</p>
          </div>
          <div className="flex gap-8">
            {["Product", "Solution", "Mission", "Contact us"].map((item) => (
              <a key={item} href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">{item}</a>
            ))}
          </div>
          <p className="text-muted-foreground text-xs">© 2026 Spaceman Craft Pvt Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

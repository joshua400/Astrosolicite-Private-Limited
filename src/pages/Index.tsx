import { Navbar } from "@/components/Navbar";

import { Button } from "@/components/ui/button";
import {
  ArrowRight, Globe, Satellite, Shield, Waves, Moon, Database, Rocket,
  ChevronDown, Target, Zap, Radio, Search, AlertTriangle, Layers,
  Eye, Cpu, Activity, BarChart3, Mail, MapPin, Linkedin, Twitter, PlayCircle,
  FileText, ExternalLink
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import heroVideo from "@/assets/hero-reveal.mp4";
import logo from "@/assets/logo.jpeg";

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

const Index = () => {
  const { scrollY } = useScroll();

  // Smooth spring-wrapped scroll values for buttery animation
  const smoothScrollY = useSpring(scrollY, springConfig);

  // Hero Parallax & Reveal Effects
  const videoScale = useTransform(smoothScrollY, [0, 800], [1, 1.15]);
  const heroOpacity = useTransform(smoothScrollY, [0, 400], [1, 0]);
  const heroTranslateY = useTransform(smoothScrollY, [0, 400], [0, -80]);

  // Section reveal for "The Orbital Challenge"
  const challengeScale = useTransform(smoothScrollY, [300, 800], [0.9, 1]);
  const challengeOpacity = useTransform(smoothScrollY, [300, 600], [0, 1]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden noise-bg selection:bg-primary/30">
      <div className="scanline" />
      <Navbar />

      {/* ── [HOME] Hero Section ── */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Cinematic Video Background */}
        <motion.div
          style={{ scale: videoScale }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity, y: heroTranslateY }}
          className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8 will-change-transform"
        >
          <div className="inline-flex items-center gap-3 text-primary text-[11px] font-mono-tech tracking-[0.3em] uppercase">
            <span className="w-10 h-[1px] bg-primary" />
            ASTROSOLICITE PRIVATE LIMITED
            <span className="w-10 h-[1px] bg-primary" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[0.95] tracking-wide">
            Intelligent{" "}
            <span className="text-gradient font-italic">Orbital Protection</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
            Advanced autonomous debris mitigation and satellite protection systems engineered for sustainable space operations.
          </p>

          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-[11px] font-mono-tech tracking-[0.2em] uppercase rounded-none shadow-[4px_4px_0px_#00b8d4] mt-2">
            Explore Our Technology <ArrowRight size={14} className="ml-2" />
          </Button>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 z-10">
          <span className="text-[10px] font-mono-tech tracking-[0.3em] uppercase">Scroll to explore</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* ── The Orbital Challenge ── */}
      <motion.section
        style={{ scale: challengeScale, opacity: challengeOpacity }}
        className="py-32 px-6 relative border-y border-primary/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-full" />
              <div className="relative glass-panel p-8">
                <AlertTriangle className="text-accent mb-6" size={40} />
                <h2 className="font-display text-4xl mb-6">The Orbital <span className="italic">Challenge</span></h2>
                <p className="text-muted-foreground leading-relaxed mb-6 italic border-l-2 border-accent pl-6">
                  Low Earth Orbit is becoming increasingly congested due to rapid mega-constellation deployments, accumulation of high-velocity debris, and rising mission risks.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Even centimeter-scale debris traveling at orbital velocity can critically damage operational satellites. The future of the space economy depends on proactive orbital protection systems.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Layers size={21} />, title: "Rapid Congestion", desc: "Mega-constellation deployments" },
                { icon: <Zap size={21} />, title: "High Velocity", desc: "Accumulation of debris" },
                { icon: <Target size={21} />, title: "Collision Probability", desc: "Increasing orbital risk" },
                { icon: <Shield size={21} />, title: "Financial Impact", desc: "Rising mission & insurance risk" },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-border bg-card/30 hover:border-primary/40 transition-colors group">
                  <div className="text-primary mb-3 bg-primary/5 w-fit p-2 group-hover:bg-primary/10 transition-colors">{item.icon}</div>
                  <h3 className="font-mono-tech text-xs font-bold tracking-widest uppercase mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── [TECHNOLOGY] Flagship Innovation ── */}
      <section id="technology" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary text-[11px] font-mono-tech tracking-[0.3em] uppercase mb-4 block">Our Flagship Innovation</span>
            <h2 className="font-display text-5xl md:text-6xl mb-6">Orbital Debris Shielding System <span className="text-accent font-italic">(ODSS)</span></h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Astrosolicite introduces the Wrap Debris Satellite (WDS) — an autonomous companion-based architecture that enhances satellite survivability.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: <Search />, title: "Tracking", desc: "Real-time debris tracking & classification" },
              { icon: <Cpu />, title: "AI-Powered", desc: "Trajectory prediction modeling" },
              { icon: <Shield />, title: "Layered", desc: "Multi-layer hypervelocity shielding" },
              { icon: <Target />, title: "Capture", desc: "Hyperelastic debris capture module" },
              { icon: <Activity />, title: "Validated", desc: "Simulation-validated engineering" },
              { icon: <Globe />, title: "Awareness", desc: "Multi-sensor situational awareness" },
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 hover:bg-white/5 transition-all group border-primary/5 hover:border-primary/20">
                <div className="text-primary mb-5 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3 tracking-wide">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ODSS Deep Dive ── */}
      <section className="py-32 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-primary text-[10px] font-mono-tech tracking-[0.3em] uppercase mb-6 block">Internal Specs: N0-POROUS CAPTURE</span>
            <h2 className="font-display text-4xl mb-8">Hyperelastic Aerogel Collector</h2>
            <div className="space-y-6">
              {[
                "High strain tolerance for energy dissipation",
                "Superior thermal insulation in extreme environments",
                "Minimal secondary fragmentation upon impact",
                "Ultra-lightweight aerospace-grade material",
              ].map((p, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_cyan]" />
                  <span className="text-muted-foreground text-sm">{p}</span>
                </div>
              ))}
            </div>
            <Button className="mt-10 bg-transparent border border-primary text-primary hover:bg-primary/10 rounded-none px-10">
              Technical Whitepaper
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-pulse opacity-50" />
              <div className="absolute inset-4 border border-primary/10 rounded-full animate-spin-slow rotate-45" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Database size={80} className="text-primary opacity-40 shadow-glow" />
              </div>
              <div className="absolute top-0 right-0 p-4 border border-primary/30 font-mono-tech text-[9px] text-primary">
                ALBEDO: 0.12<br />STABLE OPS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── [SOLUTIONS] ── */}
      <section id="solutions" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-end mb-20">
            <div className="flex-1">
              <span className="text-primary text-[11px] font-mono-tech tracking-[0.3em] uppercase mb-4 block">Strategic Applications</span>
              <h2 className="font-display text-5xl">Solutions for the <span className="italic text-gradient">Space Frontier</span></h2>
            </div>
            <p className="flex-1 text-muted-foreground max-w-lg">
              Protecting critical infrastructure across commercial, defense, and collective orbital domains.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Satellite Operators",
                icon: <Satellite />,
                items: ["Risk reduction", "Mission life extension", "Insurance mitigation", "Autonomous protection"]
              },
              {
                title: "Defence & Strategic",
                icon: <Shield />,
                items: ["Critical asset protection", "Secure orbital monitoring", "Indigenous safety systems"]
              },
              {
                title: "Mega-Constellations",
                icon: <Layers />,
                items: ["Scalable debris management", "Distributed STM support", "Real-time collision avoidance"]
              },
            ].map((sol, i) => (
              <div key={i} className="p-10 border border-border bg-black/20 hover:border-primary/30 transition-all flex flex-col h-full">
                <div className="text-primary mb-6">{sol.icon}</div>
                <h3 className="font-bold text-xl mb-6">{sol.title}</h3>
                <ul className="space-y-4 flex-1">
                  {sol.items.map((item, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex gap-3">
                      <ArrowRight size={14} className="text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── [VISION] ── */}
      <section className="py-36 px-6 relative star-bg bg-card/20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-primary text-[11px] font-mono-tech tracking-[0.3em] uppercase mb-8 block">Our Vision</span>
          <h2 className="font-display text-5xl md:text-7xl mb-10 leading-[1.05]">
            A Future Where Space <br />Sustainability <span className="italic text-gradient">is the Standard</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center mt-16">
            {[
              { v: "Autonomous Protection", d: "Embedded in every satellite" },
              { v: "Managed Risk", d: "Proactive debris mitigation" },
              { v: "Foundational Infra", d: "Global safety standard" },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-foreground font-bold mb-2 tracking-wide uppercase text-xs">{item.v}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── [ROADMAP] ── */}
      <section id="roadmap" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="font-display text-5xl mb-4">Strategic <span className="italic">Roadmap</span></h2>
            <p className="text-muted-foreground">From Simulation to Orbital Deployment</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { phase: "Phase 1", title: "Simulation", desc: "Structural & thermal proof-of-concept validation." },
              { phase: "Phase 2", title: "Prototype", desc: "Material fabrication & subsystem integration." },
              { phase: "Phase 3", title: "Testing", desc: "Hypervelocity impact & vibration validation." },
              { phase: "Phase 4", title: "Commercial", desc: "Host satellite integration & deployment." },
            ].map((p, i) => (
              <div key={i} className="relative p-8 border border-border group overflow-hidden">
                <div className="absolute top-0 right-0 p-2 font-mono-tech text-[8px] text-primary/30 group-hover:text-primary transition-colors">0{i + 1}</div>
                <span className="text-primary font-mono-tech text-[10px] tracking-widest mb-4 block uppercase font-bold">{p.phase}</span>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── [INVESTORS] ── */}
      <section id="investors" className="py-32 px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto glass-panel p-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-display text-5xl mb-6">The <span className="italic font-normal">Opportunity</span></h2>
              <p className="text-muted-foreground mb-8 text-lg">
                The global space economy is expanding rapidly, with orbital safety emerging as a critical infrastructure need.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Deep-tech defensible innovation",
                  "Scalable hardware-as-a-service model",
                  "Hardware + analytics revenue integration",
                  "Long-term recurring STM data services",
                ].map((t, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckIcon className="text-primary mt-1" size={16} />
                    <span className="text-sm text-foreground/80">{t}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-primary text-primary-foreground font-mono-tech tracking-widest uppercase rounded-none px-8 py-6">
                Request Investor Deck
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Market Need", val: "Critical" },
                { label: "Innovation", val: "Deep-Tech" },
                { label: "Scalability", val: "Modular" },
                { label: "Validation", val: "Sim-1" },
              ].map((s, i) => (
                <div key={i} className="border border-primary/20 p-6 text-center">
                  <p className="text-primary text-xl font-bold font-mono-tech">{s.val}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── [CAREERS] & [NEWS] ── */}
      <section id="careers" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-display text-4xl mb-8">Join the <span className="italic">Mission</span></h2>
            <div className="space-y-4">
              {[
                { role: "Aerospace Simulation Engineer", loc: "Remote/Hybrid" },
                { role: "Materials Research Specialist", loc: "India" },
                { role: "Embedded Systems Engineer", loc: "India" },
                { role: "AI/Orbital Dynamics Analyst", loc: "Remote" },
              ].map((job, i) => (
                <div key={i} className="p-5 border border-border flex justify-between items-center hover:border-primary transition-colors cursor-pointer group">
                  <div>
                    <p className="font-bold text-sm tracking-wide group-hover:text-primary transition-colors">{job.role}</p>
                    <p className="text-[10px] text-muted-foreground mt-1 uppercase font-mono-tech">{job.loc}</p>
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-muted-foreground">Contact: <a href="mailto:careers@astrosolicite.com" className="hover:text-primary text-primary">careers@astrosolicite.com</a></p>
          </div>

          <div id="news">
            <h2 className="font-display text-4xl mb-8">News & <span className="italic">Updates</span></h2>
            <div className="space-y-6">
              {[
                { date: "Feb 15, 2026", title: "Successful completion of Phase 1 Simulation tests.", tag: "Tech" },
                { date: "Jan 22, 2026", title: "Alignment with IN-SPACe regulatory framework confirmed.", tag: "Reg" },
                { date: "Dec 05, 2025", title: "Upcoming prototype unveiling at the Global Space Summit.", tag: "Event" },
              ].map((news, i) => (
                <div key={i} className="relative pl-6 border-l border-primary/30 py-1">
                  <span className="text-[10px] text-primary font-mono-tech uppercase tracking-widest mb-2 block">{news.date} — {news.tag}</span>
                  <h3 className="font-bold hover:text-primary transition-colors cursor-pointer text-sm leading-snug">{news.title}</h3>
                </div>
              ))}
            </div>
            <Button variant="link" className="text-primary mt-8 p-0 h-auto font-mono-tech tracking-wider text-[11px] uppercase group">
              View All Updates <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── [FAQ] ── */}
      <section id="faq" className="py-32 px-6 bg-card/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl text-center mb-16 italic">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              { q: "What makes Astrosolicite different?", a: "We deploy a companion-based autonomous architecture rather than relying solely on ground-based tracking." },
              { q: "Is ODSS flight-ready?", a: "The system is currently in simulation validation and prototype development phase." },
              { q: "Who are your target clients?", a: "Commercial satellite operators, defence agencies, and constellation providers." },
              { q: "How does ODSS reduce risk?", a: "Through AI-based predictive modeling, dynamic coordination, and structural mitigation layers." },
            ].map((item, i) => (
              <div key={i} className="border-b border-border pb-6 group">
                <p className="font-bold mb-2 flex justify-between items-center cursor-pointer group-hover:text-primary transition-colors text-sm uppercase tracking-wide">
                  {item.q}
                  <ChevronDown size={14} className="text-muted-foreground group-hover:text-primary" />
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── [CONTACT] ── */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-display text-6xl mb-8">Get In <span className="italic font-normal">Touch</span></h2>
              <p className="text-muted-foreground text-lg mb-12">
                Partner with us to protect the orbital environment and preserve the future of space operations.
              </p>

              <div className="grid gap-8">
                {[
                  { icon: <MapPin />, label: "Headquarters", val: "Bengaluru, India" },
                  { icon: <Mail />, label: "General Enquiries", val: "info@astrosolicite.com" },
                  { icon: <Cpu />, label: "Partnerships", val: "partnerships@astrosolicite.com" },
                  { icon: <BarChart3 />, label: "Investors", val: "investors@astrosolicite.com" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 items-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/5 border border-primary/20 text-primary">{item.icon}</div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase font-mono-tech tracking-widest">{item.label}</p>
                      <p className="font-bold text-sm">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-10">
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono-tech uppercase tracking-widest">Full Name</label>
                    <input type="text" placeholder="Your full name" className="w-full bg-white/5 border border-border p-3 focus:outline-none focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono-tech uppercase tracking-widest">Phone</label>
                    <input type="text" placeholder="Your phone number" className="w-full bg-white/5 border border-border p-3 focus:outline-none focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono-tech uppercase tracking-widest">Organization</label>
                  <input type="text" placeholder="Your organization" className="w-full bg-white/5 border border-border p-3 focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono-tech uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="your@email.com" className="w-full bg-white/5 border border-border p-3 focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono-tech uppercase tracking-widest">Subject</label>
                  <input type="text" placeholder="Inquiry subject" className="w-full bg-white/5 border border-border p-3 focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono-tech uppercase tracking-widest">Message</label>
                  <textarea rows={4} placeholder="Tell us about your inquiry..." className="w-full bg-white/5 border border-border p-3 focus:outline-none focus:border-primary resize-none" />
                </div>
                <Button className="w-full bg-primary text-primary-foreground font-mono-tech tracking-[0.2em] rounded-none py-6 uppercase shadow-[4px_4px_0px_white]">
                  Submit Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-card py-20 px-6 border-t border-primary/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col gap-4">
              <span className="font-mono-tech text-lg font-bold uppercase tracking-[0.25em]">ASTRO<span className="text-primary">SOLICITE</span></span>
              <p className="text-muted-foreground text-xs leading-relaxed max-w-xs uppercase tracking-wider">
                Autonomous Orbital Protection Systems. <br />
                Protecting Orbits. Preserving Futures.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
            <div className="space-y-4">
              <h4 className="font-mono-tech text-[10px] tracking-widest uppercase font-bold text-primary">Links</h4>
              <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                {["Home", "About", "Technology", "Solutions", "Roadmap", "Investors", "Careers", "News", "Contact"].map((l) => (
                  <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono-tech text-[10px] tracking-widest uppercase font-bold text-primary">Legal</h4>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground">
              {["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Disclaimer"].map((l) => (
                <a key={l} href="#" className="hover:text-primary transition-colors">{l}</a>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="font-mono-tech text-[10px] tracking-widest uppercase font-bold text-primary mb-4">Connect</h4>
              <div className="flex gap-4">
                <Linkedin size={18} className="text-muted-foreground hover:text-primary cursor-pointer" />
                <Twitter size={18} className="text-muted-foreground hover:text-primary cursor-pointer" />
                <Search size={18} className="text-muted-foreground hover:text-primary cursor-pointer" />
                <PlayCircle size={18} className="text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono-tech text-[10px] tracking-widest uppercase font-bold text-primary">Contact</h4>
            <div className="text-xs text-muted-foreground space-y-2">
              <p>Bengaluru, India</p>
              <p>info@astrosolicite.com</p>
              <p>www.astrosolicite.com</p>
            </div>
            <div className="pt-4">
              <img src={logo} alt="Astrosolicite" className="w-16 h-16 object-contain border border-white/10 dark:invert rounded p-1" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-muted-foreground tracking-widest uppercase">
          <p>© 2026 Astrosolicite Private Limited. All rights reserved.</p>
          <p className="mt-4 md:mt-0 italic">Designed for sustainable space innovation.</p>
        </div>
      </footer>
    </div>
  );
};

const CheckIcon = ({ className, size }: { className?: string, size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default Index;

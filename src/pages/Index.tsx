import { useEffect, useRef, memo } from "react";
import { Navbar } from "@/components/Navbar";
import { default as About } from "@/components/About";
import { default as Founder } from "@/components/Founder";

import { Button } from "@/components/ui/button";
import {
  ArrowRight, Globe, Satellite, Shield, Waves, Moon, Database, Rocket,
  ChevronDown, Target, Zap, Radio, Search, AlertTriangle, Layers,
  Eye, Cpu, Activity, BarChart3, Mail, MapPin, Linkedin, Twitter, PlayCircle,
  FileText, ExternalLink
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { MotionReveal, SpotlightCard, use3DTilt, TextScramble, Magnetic, OrbitalDecor, CharReveal } from "@/hooks/useAnimations";
import heroVideo from "@/assets/hero-reveal.mp4";
import logo from "@/assets/logo.jpeg";

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

const Index = () => {
  const { scrollY } = useScroll();
  const heroTiltRef = use3DTilt();

  // Smooth spring-wrapped scroll values for buttery animation
  const smoothScrollY = useSpring(scrollY, springConfig);

  // Hero Parallax & Reveal Effects
  const videoScale = useTransform(smoothScrollY, [0, 800], [1, 1.15]);
  const heroOpacity = useTransform(smoothScrollY, [0, 400], [1, 0]);
  const heroTranslateY = useTransform(smoothScrollY, [0, 400], [0, -80]);

  // Section reveal for "The Orbital Challenge"
  const challengeScale = useTransform(smoothScrollY, [300, 800], [0.9, 1]);
  const challengeOpacity = useTransform(smoothScrollY, [300, 600], [0, 1]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden noise-bg selection:bg-primary/30 cursor-none">
      <CustomCursor mouseX={mouseX} mouseY={mouseY} />
      <BackgroundDecor />
      <div className="scanline pointer-events-none" />
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
          ref={heroTiltRef}
          style={{ opacity: heroOpacity, y: heroTranslateY }}
          className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8 will-change-transform"
        >
          <div className="inline-flex items-center gap-3 text-primary text-[11px] font-mono-tech tracking-[0.3em] uppercase">
            <span className="w-10 h-[1px] bg-primary" />
            ASTROSOLICITE PRIVATE LIMITED
            <span className="w-10 h-[1px] bg-primary" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.1] md:leading-[0.95] tracking-wide">
            <CharReveal text="Intelligent" />{" "}
            <span className="text-gradient font-italic block sm:inline">
              <CharReveal text="Orbital Protection" delay={0.3} />
            </span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
            Advanced autonomous debris mitigation and satellite protection systems engineered for sustainable space operations.
          </p>

          <Magnetic>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-[11px] font-mono-tech tracking-[0.2em] uppercase rounded-none shadow-[4px_4px_0px_#00b8d4] mt-2 group">
              Explore Our Technology <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Magnetic>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 z-10">
          <span className="text-[10px] font-mono-tech tracking-[0.3em] uppercase">Scroll to explore</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      <About />

      <Founder />

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
          <MotionReveal className="text-center mb-20">
            <span className="text-primary text-[11px] font-mono-tech tracking-[0.3em] uppercase mb-4 block">Our Flagship Innovation</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mb-6">
              <CharReveal text="Orbital Debris Shielding System" /> <span className="text-accent font-italic text-2xl md:text-4xl lg:text-5xl block md:inline mt-2 md:mt-0">(ODSS)</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Astrosolicite introduces the Wrap Debris Satellite (WDS) — an autonomous companion-based architecture that enhances satellite survivability.
            </p>
          </MotionReveal>
          <OrbitalDecor />
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: <Search />, title: "Tracking", desc: "Real-time debris tracking & classification" },
              { icon: <Cpu />, title: "AI-Powered", desc: "Trajectory prediction modeling" },
              { icon: <Shield />, title: "Layered", desc: "Multi-layer hypervelocity shielding" },
              { icon: <Target />, title: "Capture", desc: "Hyperelastic debris capture module" },
              { icon: <Activity />, title: "Validated", desc: "Simulation-validated engineering" },
              { icon: <Globe />, title: "Awareness", desc: "Multi-sensor situational awareness" },
            ].map((item, i) => (
              <MotionReveal key={i} delay={i * 0.1}>
                <SpotlightCard className="p-8 hover:bg-white/5 transition-all group border-primary/5 hover:border-primary/20 h-full">
                  <div className="text-primary mb-5 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </SpotlightCard>
              </MotionReveal>
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
          <MotionReveal className="flex flex-col lg:flex-row gap-12 items-end mb-20">
            <div className="flex-1">
              <span className="text-primary text-[11px] font-mono-tech tracking-[0.3em] uppercase mb-4 block">Strategic Applications</span>
              <h2 className="font-display text-3xl md:text-5xl leading-tight">
                <CharReveal text="Solutions for the" /> <br className="md:hidden" /> <span className="italic text-gradient"><CharReveal text="Space Frontier" delay={0.3} /></span>
              </h2>
            </div>
            <p className="flex-1 text-muted-foreground max-w-lg">
              Protecting critical infrastructure across commercial, defense, and collective orbital domains.
            </p>
          </MotionReveal>

          <OrbitalDecor />
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
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
              <MotionReveal key={i} delay={i * 0.15}>
                <SpotlightCard className="p-10 transition-all flex flex-col h-full border border-primary/10">
                  <div className="text-primary mb-6 transition-transform group-hover:scale-110">{sol.icon}</div>
                  <h3 className="font-bold text-xl mb-6">{sol.title}</h3>
                  <ul className="space-y-4 flex-1">
                    {sol.items.map((item, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-3">
                        <ArrowRight size={14} className="text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── [VISION] ── */}
      <section className="py-36 px-6 relative star-bg bg-card/20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MotionReveal>
            <span className="text-primary text-[11px] font-mono-tech tracking-[0.3em] uppercase mb-8 block">Our Vision</span>
            <h2 className="font-display text-5xl md:text-7xl mb-10 leading-[1.05]">
              <CharReveal text="A Future Where Space" /><br />
              <span className="italic text-gradient">
                <CharReveal text="Sustainability is the Standard" delay={0.5} />
              </span>
            </h2>
          </MotionReveal>
          <div className="grid sm:grid-cols-3 gap-8 text-center mt-16">
            {[
              { v: "Autonomous Protection", d: "Embedded in every satellite" },
              { v: "Managed Risk", d: "Proactive debris mitigation" },
              { v: "Foundational Infra", d: "Global safety standard" },
            ].map((item, i) => (
              <MotionReveal key={i} delay={0.2 + i * 0.1} direction="none" distance={0}>
                <div>
                  <p className="text-foreground font-bold mb-2 tracking-wide uppercase text-xs">{item.v}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.d}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── [ROADMAP] ── */}
      <section id="roadmap" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <MotionReveal className="mb-20 text-center">
            <h2 className="font-display text-5xl mb-4">
              <CharReveal text="Strategic Roadmap" />
            </h2>
            <p className="text-muted-foreground text-xs uppercase tracking-[0.4em]">From Simulation to Orbital Deployment</p>
          </MotionReveal>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { phase: "Phase 1", title: "Simulation", desc: "Structural & thermal proof-of-concept validation." },
              { phase: "Phase 2", title: "Prototype", desc: "Material fabrication & subsystem integration." },
              { phase: "Phase 3", title: "Testing", desc: "Hypervelocity impact & vibration validation." },
              { phase: "Phase 4", title: "Commercial", desc: "Host satellite integration & deployment." },
            ].map((p, i) => (
              <MotionReveal key={i} delay={i * 0.1}>
                <div className="relative p-8 border border-border group overflow-hidden bg-card/10 hover:border-primary/30 transition-all h-full">
                  <div className="absolute top-0 right-0 p-2 font-mono-tech text-[8px] text-primary/30 group-hover:text-primary transition-colors">0{i + 1}</div>
                  <span className="text-primary font-mono-tech text-[10px] tracking-widest mb-4 block uppercase font-bold">{p.phase}</span>
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── [INVESTORS] ── */}
      <section id="investors" className="py-32 px-6 bg-primary/5 relative overflow-hidden">
        <OrbitalDecor />
        <div className="max-w-7xl mx-auto glass-panel p-16 relative z-10 border border-primary/20">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-display text-5xl mb-6">
                <CharReveal text="The Opportunity" />
              </h2>
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
              <Magnetic>
                <Button className="bg-primary text-primary-foreground font-mono-tech tracking-widest uppercase rounded-none px-8 py-6 group">
                  Request Investor Deck <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Magnetic>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Market Need", val: "Critical" },
                { label: "Innovation", val: "Deep-Tech" },
                { label: "Scalability", val: "Modular" },
                { label: "Validation", val: "Sim-1" },
              ].map((s, i) => (
                <div key={i} className="border border-primary/20 p-6 text-center bg-black/40">
                  <p className="text-primary text-xl font-bold font-mono-tech">{s.val}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── [CONTACT] ── */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <MotionReveal className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl mb-8">
                <CharReveal text="Get In Touch" />
              </h2>
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
                  <div key={i} className="flex gap-5 items-center group">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/5 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[8px] text-primary/60 uppercase font-mono-tech tracking-[0.25em] mb-1">{item.label}</p>
                      <p className="font-bold text-sm tracking-wide group-hover:text-primary transition-colors">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SpotlightCard className="p-10 border border-primary/10 bg-black/40">
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono-tech uppercase tracking-widest text-primary/70">Full Name</label>
                    <input type="text" placeholder="Your full name" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-primary transition-all rounded-none text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono-tech uppercase tracking-widest text-primary/70">Phone</label>
                    <input type="text" placeholder="Your phone number" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-primary transition-all rounded-none text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono-tech uppercase tracking-widest text-primary/70">Organization</label>
                  <input type="text" placeholder="Your organization" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-primary transition-all rounded-none text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono-tech uppercase tracking-widest text-primary/70">Email Address</label>
                  <input type="email" placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-primary transition-all rounded-none text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono-tech uppercase tracking-widest text-primary/70">Message</label>
                  <textarea rows={4} placeholder="Tell us about your inquiry..." className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-primary transition-all rounded-none text-sm resize-none" />
                </div>
                <Button className="w-full bg-primary text-primary-foreground font-mono-tech tracking-[0.3em] rounded-none py-7 uppercase shadow-[4px_4px_0px_white] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  Submit Inquiry
                </Button>
              </div>
            </SpotlightCard>
          </MotionReveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-card py-16 md:py-24 px-6 border-t border-primary/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <span className="font-mono-tech text-lg font-bold uppercase tracking-[0.25em]">ASTRO<span className="text-primary italic">SOLICITE</span></span>
              <p className="text-muted-foreground text-[10px] md:text-xs leading-relaxed max-w-xs uppercase tracking-[0.15em]">
                Autonomous Orbital Protection Systems. <br />
                Protecting Orbits. Preserving Futures.
              </p>
            </div>
            <div className="flex gap-4">
              <Linkedin size={18} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter size={18} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Search size={18} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <PlayCircle size={18} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-mono-tech text-[10px] tracking-[0.3em] uppercase font-bold text-primary">Intelligence</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-[10px] uppercase tracking-widest text-muted-foreground font-mono-tech">
              {["Home", "About", "Technology", "Solutions", "Roadmap", "Investors", "Careers", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-mono-tech text-[10px] tracking-[0.3em] uppercase font-bold text-primary">Protocol</h4>
            <div className="flex flex-col gap-3 text-[10px] uppercase tracking-widest text-muted-foreground font-mono-tech">
              {["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Disclaimer"].map((l) => (
                <a key={l} href="#" className="hover:text-primary transition-colors">{l}</a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-mono-tech text-[10px] tracking-[0.3em] uppercase font-bold text-primary">Direct Intel</h4>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground space-y-3 font-mono-tech leading-relaxed">
              <p className="flex items-center gap-2"><MapPin size={12} className="text-primary" /> Bengaluru, India</p>
              <p className="flex items-center gap-2"><Mail size={12} className="text-primary" /> info@astrosolicite.com</p>
              <p className="flex items-center gap-2"><Globe size={12} className="text-primary" /> www.astrosolicite.com</p>
            </div>
            <div className="pt-4">
              <div className="w-14 h-14 bg-white p-1 rounded-md border border-white/10 shadow-lg">
                <img src={logo} alt="Astrosolicite" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[10px] text-muted-foreground tracking-[0.3em] uppercase relative z-10 text-center md:text-left">
          <p>© 2026 Astrosolicite Private Limited. All rights reserved.</p>
          <p className="mt-4 md:mt-0 italic opacity-60">Sustainable Space Innovation.</p>
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

const BackgroundDecor = memo(() => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-primary/2 blur-[100px] rounded-full" />
    <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-primary/2 blur-[120px] rounded-full" />
  </div>
));

const CustomCursor = memo(({ mouseX, mouseY }: { mouseX: any, mouseY: any }) => {
  const cursorX = useSpring(mouseX, { stiffness: 400, damping: 30, mass: 0.5 });
  const cursorY = useSpring(mouseY, { stiffness: 400, damping: 30, mass: 0.5 });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-primary/30 rounded-full z-[100] pointer-events-none mix-blend-difference hidden xl:block"
        style={{ x: cursorX, y: cursorY, xPercent: -50, yPercent: -50 } as any}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-primary rounded-full z-[100] pointer-events-none hidden xl:block shadow-[0_0_10px_#00e5ff]"
        style={{ x: mouseX, y: mouseY, xPercent: -50, yPercent: -50 } as any}
      />
    </>
  );
});

export default Index;

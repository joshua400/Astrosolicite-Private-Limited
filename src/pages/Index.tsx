import { useEffect, useRef, memo } from "react";
import { Navbar } from "@/components/Navbar";
import { default as About } from "@/components/About";
import { default as Founder } from "@/components/Founder";

import { Button } from "@/components/ui/button";
import {
  ArrowRight, Globe, Satellite, Shield, Waves, Moon, Database, Rocket,
  ChevronDown, Target, Zap, Radio, Search, AlertTriangle, Layers,
  Eye, Cpu, Activity, BarChart3, Mail, MapPin, Linkedin, Twitter, PlayCircle,
  FileText, ExternalLink, Award, FileBadge, BookOpen, Hexagon, ShieldCheck
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { MotionReveal, SpotlightCard, use3DTilt, TextScramble, Magnetic, OrbitalDecor, CharReveal } from "@/hooks/useAnimations";
import heroVideo from "@/assets/hero-reveal.mp4";
import logo from "@/assets/logo-new.jpeg";

const springConfig = { stiffness: 150, damping: 25, restDelta: 0.001 };

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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 cursor-none">
      <CustomCursor mouseX={mouseX} mouseY={mouseY} />
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
          className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8 will-change-transform mt-10 md:mt-20"
        >
          <div className="inline-flex items-center gap-3 text-primary text-[11px] font-mono-tech tracking-[0.3em] uppercase">
            <span className="w-10 h-[1px] bg-primary" />
            ASTROSOLSTICE PRIVATE LIMITED
            <span className="w-10 h-[1px] bg-primary" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.1] md:leading-[0.95] tracking-wide">
            <CharReveal text="Engineering the Future of" />{" "}
            <span className="text-gradient font-italic block sm:inline mt-2">
              <CharReveal text="Orbital Protection" delay={0.3} />
            </span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl font-light">
            Advanced Orbital Shielding Systems for the Next Generation of Satellites.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <Magnetic>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-[11px] font-mono-tech tracking-[0.2em] uppercase rounded-none shadow-[4px_4px_0px_#00b8d4] group">
                Explore Technology <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 px-10 py-7 text-[11px] font-mono-tech tracking-[0.2em] uppercase rounded-none shadow-[4px_4px_0px_rgba(0,184,212,0.2)] hover:shadow-[4px_4px_0px_rgba(0,184,212,0.4)] transition-all group backdrop-blur-sm">
                Partner With Us
              </Button>
            </Magnetic>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 z-10">
          <span className="text-[10px] font-mono-tech tracking-[0.3em] uppercase">Scroll to explore</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      <About />

      <Founder />

      {/* ── [TECHNOLOGY] OSDSS ── */}
      <section id="technology" className="py-32 px-6 relative border-y border-border">
        <div className="max-w-7xl mx-auto relative z-10">
          <MotionReveal className="text-center mb-24">
            <span className="text-primary text-[11px] font-mono-tech tracking-[0.3em] uppercase mb-4 block">Our Core Capability</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl mb-6">
              <CharReveal text="Orbital Space Debris" />
              <br className="hidden md:block" />
              <span className="text-accent font-italic block mt-2">
                <CharReveal text="Shielding System (OSDSS)" delay={0.2} />
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-light">
              Pioneering hypervelocity impact protection through advanced composite engineering and multiphysics modeling.
            </p>
          </MotionReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-16">
              {/* Problem */}
              <MotionReveal>
                <div className="flex gap-6">
                  <div className="mt-1">
                    <AlertTriangle className="text-accent" size={32} />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl mb-4">The Challenge</h3>
                    <ul className="space-y-3 font-light text-muted-foreground">
                      <li className="flex items-start gap-3"><span className="text-accent mt-1">▹</span> Increasing orbital debris density in critical operational altitudes</li>
                      <li className="flex items-start gap-3"><span className="text-accent mt-1">▹</span> Extreme hypervelocity impact risk exceeding 7 km/s</li>
                      <li className="flex items-start gap-3"><span className="text-accent mt-1">▹</span> Satellite lifespan reduction and premature degradation</li>
                      <li className="flex items-start gap-3"><span className="text-accent mt-1">▹</span> Mission failure economics affecting payload insurability</li>
                    </ul>
                  </div>
                </div>
              </MotionReveal>

              {/* Solution */}
              <MotionReveal delay={0.2}>
                <div className="flex gap-6">
                  <div className="mt-1">
                    <ShieldCheck className="text-primary hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,184,212,0.3)] rounded-full" size={32} />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl mb-4 text-primary">The Architecture</h3>
                    <ul className="space-y-3 font-light text-foreground/90">
                      <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> Multi-layer composite shielding integration</li>
                      <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> Kinetic energy dissipative structural framework</li>
                      <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> Aerogel-assisted micro-debris mitigation layers</li>
                      <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> High thermal-resilient outer-hull integration</li>
                      <li className="flex items-start gap-3"><span className="text-primary mt-1">▹</span> Advanced structural load redistribution systems</li>
                    </ul>
                  </div>
                </div>
              </MotionReveal>
            </div>

            {/* Validation */}
            <MotionReveal delay={0.3}>
              <SpotlightCard className="p-10 border border-primary/20 bg-black/40 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors" />
                <Activity className="text-primary mb-6" size={40} />
                <h3 className="font-display text-3xl mb-6">Engineering Validation</h3>
                <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                  Our designs undergo comprehensive computational and physical verification to ensure mission-critical reliability under extreme orbital environments.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Modal Analysis",
                    "Buckling Assessment",
                    "Fatigue & Vibration Testing",
                    "Thermal Stress Simulation",
                    "Multiphysics Structural Modeling",
                    "Hypervelocity Impact Testing"
                  ].map((val, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 group-hover:border-primary/20 transition-colors">
                      <div className="w-1.5 h-1.5 bg-primary/70 rounded-full" />
                      <span className="text-xs font-mono-tech tracking-wider uppercase text-foreground/80">{val}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* ── [RECOGNITION] IN-SPACe ── */}
      <section className="py-24 px-6 bg-primary/5 border-b border-border/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 text-center lg:text-left">
              <Award className="text-primary mb-6 mx-auto lg:mx-0" size={64} />
              <h2 className="font-display text-4xl lg:text-5xl mb-4">National-Level <br /><span className="italic text-primary">Recognition</span></h2>
            </div>
            <div className="lg:col-span-3">
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-6">
                Selected among 10 profound innovators across India under the prestigious <span className="font-bold text-primary">IN-SPACe Innovate Phase</span>.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Technical mentorship from ISRO scientists",
                  "Access to robust validation ecosystems",
                  "Rigorous space domain expert review",
                  "Government-backed innovation credibility"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 border-b border-primary/10 pb-3">
                    <Rocket className="text-primary shrink-0" size={16} />
                    <span className="text-sm font-sans tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── [RESEARCH] IP & Patents ── */}
      <section id="research" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <MotionReveal className="text-center mb-20">
            <span className="text-primary text-[11px] font-mono-tech tracking-[0.3em] uppercase mb-4 block">Innovation Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              <CharReveal text="Patents & Publications" />
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A robust intellectual property foundation driving deep-tech structural engineering.
            </p>
          </MotionReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Patents Column */}
            <div className="lg:col-span-2 space-y-8">
              <SpotlightCard className="p-8 border border-primary/20 bg-card/40">
                <div className="flex items-center gap-4 mb-8">
                  <FileBadge className="text-accent" size={28} />
                  <h3 className="font-display text-2xl tracking-wide">Granted Patents</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Smart Material-Based Cube Satellite Outer Shell (2023)",
                    "Hypersonic Glide Vehicle (2024)",
                    "MEDUSA Space Tech Architecture (2024)",
                    "Manned Amphibious Aircraft (2023)",
                    "Multi-Sensor ML Sorting Robot (2023)"
                  ].map((p, i) => (
                    <div key={i} className="p-4 bg-black/40 border-l-2 border-accent text-sm text-foreground/90 leading-relaxed font-light">
                      {p}
                    </div>
                  ))}
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-8 border border-white/10 bg-card/20">
                <div className="flex items-center gap-4 mb-6">
                  <Hexagon className="text-muted-foreground" size={24} />
                  <h3 className="font-display text-xl tracking-wide">Published / Filed Patents</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Electro-Hydraulic Multi Petal Actuator",
                    "Sailfish Amphibious Vehicle",
                    "Agricultural Drone",
                    "Waste Management Drone",
                    "Vortex Wake Mitigation Device"
                  ].map((p, i) => (
                    <span key={i} className="text-xs font-mono-tech tracking-wider uppercase bg-white/5 border border-white/10 px-3 py-2 text-muted-foreground">
                      {p}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </div>

            {/* Research Column */}
            <div className="space-y-8">
              <SpotlightCard className="p-8 border border-primary/10 bg-black/60 h-full">
                <BookOpen className="text-primary mb-6" size={28} />
                <h3 className="font-display text-2xl mb-6">Scientific Journals</h3>
                <p className="text-xs text-muted-foreground mb-6 uppercase tracking-widest font-mono-tech border-b border-white/10 pb-4">Selected Publications Include</p>
                <ul className="space-y-4 text-sm text-foreground/80 font-light italic mb-8">
                  <li>Fuel (Elsevier)</li>
                  <li>International Journal of Hydrogen Energy</li>
                  <li>Aircraft Engineering & Aerospace Technology</li>
                  <li>Materials Today: Proceedings</li>
                  <li>AIP Conference Proceedings</li>
                  <li>Journal of Physics Conference Series</li>
                </ul>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono-tech border-b border-white/10 pb-4 mb-4">Research Domains</p>
                <div className="flex flex-wrap gap-2">
                  {["Hydrogen Combustion", "Biodiesel Optimization", "CFD Aerodynamics", "Plasma Nitriding", "Composite Materials", "Thermal Energy Storage"].map((d, i) => (
                    <span key={i} className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-sm">
                      {d}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── [PROJECTS] Defense & Industrial ── */}
      <section className="py-24 px-6 border-y border-border/50 relative overflow-hidden star-bg">
        <div className="max-w-7xl mx-auto relative z-10">
          <MotionReveal className="mb-16">
            <h2 className="font-display text-3xl md:text-5xl">Defense & Industrial <span className="text-primary italic">Projects</span></h2>
          </MotionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "CVRDE Robot", desc: "Anti-Personnel Mine Detection & Sweeping Robot (2012)" },
              { title: "LCA Tejas", desc: "Anti-Fretting Compound Study for Main Gearbox (2009)" },
              { title: "Railway Alert System", desc: "Early warning system funded by Anna University" },
              { title: "Cooling Architecture", desc: "Phase Change Material (PCM) Helmet Cooling System" },
              { title: "Propulsion Research", desc: "Biodiesel Engine Emission & Performance Optimization" },
            ].map((proj, i) => (
              <div key={i} className="p-6 bg-black/40 border border-primary/20 hover:border-primary/60 transition-colors group">
                <div className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-black transition-colors rounded-full">
                  <Shield size={14} />
                </div>
                <h4 className="font-bold font-mono-tech tracking-wider uppercase text-xs mb-2">{proj.title}</h4>
                <p className="text-sm font-light text-muted-foreground">{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── [INVESTORS] ── */}
      <section id="investors" className="py-32 px-6 bg-primary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto glass-panel p-8 md:p-16 relative z-10 border border-primary/30 shadow-[0_0_40px_rgba(0,184,212,0.1)]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-6 text-foreground">
                <CharReveal text="Why Invest in" /><br />
                <span className="italic text-primary"><CharReveal text="ASTROSOLSTICE?" delay={0.2} /></span>
              </h2>
              <p className="text-muted-foreground mb-10 text-base md:text-lg font-light leading-relaxed">
                The global space economy is accelerating, but orbital assets remain highly vulnerable. We are building the foundational infrastructure to protect billion-dollar deployments.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Exponential orbital debris market growth",
                  "Defense-aligned strategic technology",
                  "Strong intellectual property (IP) portfolio",
                  "Deep-rooted academic R&D backing",
                  "Clear government validation pathway (IN-SPACe)"
                ].map((t, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckIcon className="text-primary mt-1 shadow-[0_0_10px_rgba(0,184,212,0.5)] bg-primary/10 rounded-full" size={18} />
                    <span className="text-sm text-foreground/90 font-light tracking-wide">{t}</span>
                  </div>
                ))}
              </div>
              <Magnetic>
                <Button className="bg-primary text-primary-foreground font-mono-tech tracking-[0.2em] uppercase rounded-none px-10 py-7 group shadow-[4px_4px_0px_#00b8d4] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                  Request Investor Deck <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Magnetic>
            </div>
            <div className="grid grid-cols-2 gap-4 auto-rows-fr">
              {[
                { label: "Market Need", val: "Critical" },
                { label: "Innovation", val: "Deep-Tech" },
                { label: "Validation", val: "Gov-Backed" },
                { label: "Defensibility", val: "IP-Driven" },
              ].map((s, i) => (
                <div key={i} className="border border-primary/20 p-6 md:p-8 text-center bg-black/50 hover:bg-black/80 transition-colors flex flex-col justify-center items-center backdrop-blur-md">
                  <p className="text-primary text-xl md:text-2xl font-bold font-mono-tech">{s.val}</p>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-2">{s.label}</p>
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
                  { icon: <MapPin />, label: "Headquarters", val: "Cuddalore, Tamil Nadu" },
                  { icon: <Mail />, label: "General Enquiries", val: "info@astrosolstice.com" },
                  { icon: <Cpu />, label: "Partnerships", val: "partnerships@astrosolstice.com" },
                  { icon: <BarChart3 />, label: "Investors", val: "investors@astrosolstice.com" },
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
      <footer className="bg-card py-16 md:py-24 px-6 border-t border-primary/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <span className="font-mono-tech text-xl font-bold uppercase tracking-[0.2em] text-foreground">ASTRO<span className="text-primary italic">SOLSTICE</span></span>
              <p className="text-muted-foreground text-[10px] md:text-xs leading-relaxed max-w-xs uppercase tracking-[0.15em]">
                Autonomous Orbital Protection Systems. <br />
                Protecting Orbits. Securing Missions.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" title="LinkedIn" className="w-10 h-10 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all">
                <Linkedin size={16} />
              </a>
              <a href="#" title="Twitter" className="w-10 h-10 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-mono-tech text-xs tracking-[0.3em] uppercase font-bold text-primary border-b border-primary/20 pb-2 inline-block">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[11px] uppercase tracking-widest text-muted-foreground font-mono-tech">
              {["Home", "About", "Technology", "Research", "Investors", "Careers", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-primary/30">▹</span> {l}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-mono-tech text-xs tracking-[0.3em] uppercase font-bold text-primary border-b border-primary/20 pb-2 inline-block">Legal Protocol</h4>
            <div className="flex flex-col gap-4 text-[11px] uppercase tracking-widest text-muted-foreground font-mono-tech">
              {["Privacy Policy", "Terms of Service", "Investor Relations"].map((l) => (
                <a key={l} href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-primary/30">▹</span> {l}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-mono-tech text-xs tracking-[0.3em] uppercase font-bold text-primary border-b border-primary/20 pb-2 inline-block">Registered Command</h4>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground space-y-4 font-mono-tech leading-relaxed">
              <p className="flex items-start gap-3">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span>Plot No-3 & 4, Swamy Nagar,<br />Kollumedu, Cuddalore – 608303<br />Tamil Nadu, India</span>
              </p>
              <p className="flex items-center gap-3"><Mail size={14} className="text-primary shrink-0" /> info@astrosolstice.com</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] text-muted-foreground tracking-[0.2em] uppercase relative z-10 text-center md:text-left gap-4">
          <p>ASTROSOLSTICE PRIVATE LIMITED</p>
          <p className="opacity-60 font-light">Space Technology / Orbital Infrastructure Protection</p>
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

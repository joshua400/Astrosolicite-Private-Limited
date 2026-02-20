import { Eye, Target } from 'lucide-react'
import { MotionReveal, TextScramble, SpotlightCard, OrbitalDecor, Magnetic, CharReveal } from '@/hooks/useAnimations'

const keyPillars = [
    {
        title: 'Autonomous Defense',
        description: 'Self-governing satellite shielding minimizing reliance on ground control.',
    },
    {
        title: 'Kinetic Dissipation',
        description: 'Advanced aerogel layers engineered to scatter hypervelocity impacts.',
    },
    {
        title: 'Sustainable Orbit',
        description: 'Preventing dangerous debris cascades before they critically strike.',
    },
    {
        title: 'Predictive Targeting',
        description: 'Real-time orbital tracking calculating intercepts with AI models.',
    },
    {
        title: 'Scalable Integration',
        description: 'Hardware modules designed for seamless host-satellite deployment.',
    },
]

export default function About() {
    return (
        <section id="about" className="relative py-32 overflow-hidden bg-background border-y border-border/50">
            <div className="absolute inset-0 bg-primary/2 pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section header */}
                <MotionReveal>
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-2 mb-6 border border-primary/20 bg-primary/5 px-4 py-1.5 shadow-[0_0_15px_rgba(0,184,212,0.1)]">
                            <span className="text-[10px] font-bold tracking-[0.2em] font-mono-tech uppercase text-primary">The Company</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground tracking-tight leading-[1.2] md:leading-[1.1]">
                            <CharReveal text="About" /> <br className="sm:hidden" /> <span className="italic text-gradient"><CharReveal text="Astrosolicite" delay={0.3} /></span>
                        </h2>
                        <div className="text-muted-foreground text-lg max-w-3xl mx-auto font-sans font-light leading-relaxed space-y-4">
                            <p>
                                <span className="font-bold text-foreground">Astrosolicite Private Limited</span> is a pioneering deep-tech aerospace company focused on building next-generation orbital protection architectures to secure humanity's future in space.
                            </p>
                            <p>
                                We develop sustainable, autonomous hardware and AI-driven predictive tracking to defend critical satellite infrastructure against the escalating threat of hypervelocity orbital debris.
                            </p>
                            <p>
                                Astrosolicite specializes in mission-critical defensive hardware. Our flagship innovation is the <span className="font-bold text-primary">Orbital Debris Shielding System (ODSS)</span>, designed to:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-base ml-4 text-foreground/80">
                                <li>Actively track incoming kinetic threats in real-time</li>
                                <li>Deploy multi-layered hyperelastic capture modules</li>
                                <li>Guarantee the survivability of strategic orbital assets</li>
                            </ul>
                            <div className="pt-6 mt-6 border-t border-primary/10 text-xs uppercase tracking-widest font-mono-tech font-bold text-primary/70">
                                For: Satellite Operators • Defense Sectors • Mega-Constellations
                            </div>
                        </div>
                    </div>
                </MotionReveal>

                {/* Vision & Mission Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 relative z-10">
                    <OrbitalDecor />
                    <MotionReveal delay={0.1}>
                        <SpotlightCard className="p-12 h-full bg-black/40 border border-primary/10 hover:border-primary/30 transition-colors duration-500 shadow-xl shadow-black/50">
                            <div className="mb-8 flex items-center gap-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center border border-primary/30 shadow-[0_0_10px_rgba(0,184,212,0.2)]">
                                    <Eye className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground font-display tracking-wide">
                                    <CharReveal text="Our Vision" />
                                </h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed font-sans text-sm md:text-base">
                                To establish autonomous kinetic protection as the universal standard for all orbital operations, ensuring that the space environment remains safe, accessible, and economically viable for future generations of exploration and infrastructure.
                            </p>
                        </SpotlightCard>
                    </MotionReveal>
                    <MotionReveal delay={0.2}>
                        <SpotlightCard className="p-12 h-full bg-black/40 border border-primary/10 hover:border-primary/30 transition-colors duration-500 shadow-xl shadow-black/50">
                            <div className="mb-8 flex items-center gap-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center border border-primary/30 shadow-[0_0_10px_rgba(0,184,212,0.2)]">
                                    <Target className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground font-display tracking-wide">
                                    <CharReveal text="Our Mission" />
                                </h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed font-sans text-sm md:text-base">
                                To engineer, validate, and deploy the world's first <span className="font-bold text-primary">Companion-Based Defense Architecture</span>. We aim to mitigate catastrophic fragmentation events through highly resilient, autonomous structural countermeasures.
                            </p>
                        </SpotlightCard>
                    </MotionReveal>
                </div>

                {/* Key Pillars */}
                <MotionReveal delay={0.3}>
                    <div className="text-center mb-16">
                        <h3 className="text-sm tracking-[0.3em] uppercase font-mono-tech font-bold text-primary mb-4">Core Principles</h3>
                        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {keyPillars.map((item, index) => (
                            <div key={index} className="p-8 border-t border-primary/20 bg-background/50 hover:bg-primary/5 transition-colors duration-500 backdrop-blur-sm group">
                                <div className="text-primary/50 mb-6 font-mono-tech font-bold text-lg tracking-widest group-hover:text-primary group-hover:-translate-y-1 transition-all">0{index + 1}</div>
                                <h4 className="text-sm font-bold text-foreground mb-4 font-sans tracking-wide uppercase">{item.title}</h4>
                                <p className="text-muted-foreground text-xs font-sans leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </MotionReveal>
            </div>
        </section>
    )
}

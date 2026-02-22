import { Eye, Target, Award } from 'lucide-react'
import { MotionReveal, SpotlightCard, OrbitalDecor, CharReveal } from '@/hooks/useAnimations'

const keyPillars = [
    {
        title: 'Hypervelocity Impact Mitigation',
        description: 'Advanced engineering to counter destructive kinetic energy in orbit.',
    },
    {
        title: 'Intelligent Composite Shielding',
        description: 'Multi-layer energy-dissipative architectures for satellite survivability.',
    },
    {
        title: 'Simulation-First Validation',
        description: 'Rigorous computational and multiphysics modeling prior to deployment.',
    },
    {
        title: 'Academic + Industrial Synergy',
        description: 'Bridging deep research with practical defense-aligned applications.',
    },
    {
        title: 'National Recognition',
        description: 'Backed by government validation and space domain experts.',
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
                            <span className="text-[10px] font-bold tracking-[0.2em] font-mono-tech uppercase text-primary">Corporate Overview</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground tracking-tight leading-[1.2] md:leading-[1.1]">
                            <CharReveal text="About" /> <br className="sm:hidden" /> <span className="italic text-gradient"><CharReveal text="Astrosolstice" delay={0.3} /></span>
                        </h2>

                        <div className="flex justify-center mb-10">
                            <div className="bg-primary/10 border border-primary/30 p-4 rounded-md max-w-2xl flex items-start gap-4 shadow-[0_0_20px_rgba(0,184,212,0.15)]">
                                <Award className="text-primary shrink-0 mt-1" size={28} />
                                <p className="text-left text-sm font-mono-tech text-foreground leading-relaxed italic">
                                    “Selected under the INNOVATE Phase – Pre-Incubation Entrepreneurship Program by IN-SPACe (Government of India)”
                                </p>
                            </div>
                        </div>

                        <div className="text-muted-foreground text-lg max-w-3xl mx-auto font-sans font-light leading-relaxed space-y-4">
                            <p>
                                <span className="font-bold text-foreground">Astrosolstice Private Limited</span> was founded to address one of the most critical challenges facing the global space economy: the escalating risk of hypervelocity orbital debris.
                            </p>
                            <p>
                                We employ a <span className="font-bold text-primary">simulation-first validation strategy</span>, leveraging rigorous computational fluid dynamics (CFD), structural modeling, and academic-industrial synergy to engineer the next generation of satellite survivability enhancement systems.
                            </p>
                        </div>
                    </div>
                </MotionReveal>

                {/* Vision & Mission Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 relative z-10">
                    <MotionReveal delay={0.1}>
                        <SpotlightCard className="p-12 h-full bg-black/40 border border-primary/10 hover:border-primary/30 transition-colors duration-500 shadow-xl shadow-black/50">
                            <div className="mb-8 flex items-center gap-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-none flex items-center justify-center border border-primary/30 shadow-[0_0_10px_rgba(0,184,212,0.2)]">
                                    <Eye className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground font-display tracking-wide">
                                    <CharReveal text="Our Focus" />
                                </h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed font-sans text-sm md:text-base">
                                To secure missions and protect orbits through intelligent composite shielding. We aim to establish highly resilient, autonomous structural countermeasures as the standard for orbital sustainability engineering.
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
                                    <CharReveal text="Core Innovation" />
                                </h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed font-sans text-sm md:text-base">
                                Utilizing advanced multiphysics simulations and multi-layer composites, our <span className="font-bold text-primary">Orbital Space Debris Shielding System (OSDSS)</span> mitigates the destructive properties of hypervelocity impacts, ensuring critical mission longevity.
                            </p>
                        </SpotlightCard>
                    </MotionReveal>
                </div>

                {/* Key Pillars */}
                <MotionReveal delay={0.3}>
                    <div className="text-center mb-16">
                        <h3 className="text-sm tracking-[0.3em] uppercase font-mono-tech font-bold text-primary mb-4">Strategic Pillars</h3>
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

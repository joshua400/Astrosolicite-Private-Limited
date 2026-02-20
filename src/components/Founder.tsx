import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MotionReveal, TextScramble, SpotlightCard, OrbitalDecor, Magnetic, CharReveal } from '@/hooks/useAnimations'
import { Linkedin } from 'lucide-react'

// Assuming we only have details for KV Avinash Sarma right now. 
// Adding placeholders for the other 2 as requested ("in now our website it has three").
const founders = [
    {
        name: 'KV Avinash Sarma',
        role: 'Founder & Chief Executive Officer',
        image: '/founder_new.jpeg', // Using existing or placeholder image
        bio: 'KV Avinash Sarma brings extensive experience in the aerospace startup industry, with a proven track record of leadership and strategic vision. His expertise lies in delivering high-quality defense architectures and building successful engineering teams.',
        skills: [
            'Strategic Vision & Payload Integration',
            'Space Operations Management',
            'Cross-functional Engineering',
            'Orbital Dynamics Mentorship'
        ],
        linkedin: 'https://www.linkedin.com/in/avinashsarma',
        themeClass: 'bg-black/95' // Deep space dark
    },
    {
        name: 'Placeholder Founder 2',
        role: 'Chief Technology Officer',
        image: '/placeholder_founder_2.jpg',
        bio: 'Leading the technical development and predictive AI models for autonomous kinetic protection architectures.',
        skills: [
            'Predictive Modeling',
            'AI Systems Architecture',
            'Structural Countermeasures'
        ],
        linkedin: '#',
        themeClass: 'bg-black/90' // Slightly lighter space dark
    },
    {
        name: 'Placeholder Founder 3',
        role: 'Chief Operating Officer',
        image: '/placeholder_founder_3.jpg',
        bio: 'Overseeing daily operations, manufacturing logistics, and ensuring seamless structural production for orbital deployment.',
        skills: [
            'Logistics & Manufacturing',
            'Supply Chain Management',
            'Aerospace Regulations'
        ],
        linkedin: '#',
        themeClass: 'bg-background' // Standard background
    }
]

interface FounderCardProps {
    founder: typeof founders[0];
    index: number;
    range: [number, number];
    targetScale: number;
    progress: any; // framer-motion MotionValue
}

function FounderCard({ founder, index, range, targetScale, progress }: FounderCardProps) {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })

    const scale = useTransform(progress, range, [1, targetScale])

    return (
        <div ref={container} className="min-h-screen md:h-screen flex items-center justify-center sticky top-0 py-10 md:py-0">
            <motion.div
                style={{ scale, top: `var(--card-top)` } as any}
                className={`relative flex flex-col w-[92vw] md:w-[70vw] max-w-5xl min-h-[70vh] md:h-[70vh] p-6 sm:p-10 md:p-16 border border-primary/20 shadow-[0_32px_64px_-12px_rgba(0,184,212,0.1)] origin-top ${founder.themeClass} [--card-top:calc(8vh+${index * 20}px)] overflow-hidden`}
            >
                {/* Cinematic Grid/Noise Background */}
                <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-primary/2 pointer-events-none" />
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16 w-full h-full relative z-10 overflow-y-auto lg:overflow-hidden no-scrollbar">

                    {/* Founder Image */}
                    <div className="flex-shrink-0 relative group mt-4 lg:mt-0">
                        <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 relative">
                            <div className="absolute inset-0 rounded-none overflow-hidden border border-primary/30 p-2 shadow-inner bg-black">
                                <div className="relative w-full h-full overflow-hidden bg-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=No+Image';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                </div>
                            </div>
                            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary" />
                            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary" />
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary" />
                        </div>
                    </div>

                    {/* Founder Info */}
                    <div className="flex-1 text-center lg:text-left flex flex-col justify-center pb-6 lg:pb-0">

                        <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                            <span className="text-primary font-mono-tech text-[9px] tracking-[0.3em] uppercase">0{index + 1}</span>
                            <span className="w-8 h-px bg-primary/30" />
                        </div>

                        <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-3 text-foreground tracking-tight leading-[1.1]">
                            <CharReveal text={founder.name} delay={0.2} />
                        </h3>

                        <p className="text-[9px] sm:text-xs font-bold font-mono-tech uppercase tracking-[0.3em] text-primary mb-6 border border-primary/20 bg-primary/5 inline-block px-3 py-1 w-fit mx-auto lg:mx-0">
                            {founder.role}
                        </p>

                        <p className="text-muted-foreground leading-relaxed mb-6 font-sans font-light text-xs sm:text-sm md:text-base">
                            {founder.bio}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                            {founder.skills.map((skill: string, i: number) => (
                                <div key={i} className="flex items-center gap-2 justify-center lg:justify-start">
                                    <div className="w-1 h-1 bg-primary shadow-[0_0_8px_rgba(0,184,212,0.8)] flex-shrink-0" />
                                    <span className="text-foreground/80 text-[10px] font-mono-tech tracking-wider uppercase">{skill}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <Magnetic>
                                <a
                                    href={founder.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 text-primary hover:text-foreground transition-all duration-300 text-[9px] font-bold uppercase tracking-widest border border-primary/30 px-6 py-3 bg-primary/5 hover:bg-primary/20 group relative overflow-hidden"
                                >
                                    <span className="relative z-10">Connect Intel</span>
                                    <Linkedin className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 relative z-10" />
                                    <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </a>
                            </Magnetic>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}

export default function Founder() {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    return (
        <section ref={container} id="founder" className="relative pt-32 pb-32 bg-background border-b border-border/50">

            {/* Background Starfield styling */}
            <div className="absolute inset-0 star-bg pointer-events-none opacity-50" />

            <OrbitalDecor />
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 relative z-10">
                <MotionReveal className="text-center">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary font-mono-tech block mb-6">Strategic Command</span>
                    <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 text-foreground tracking-tight leading-[0.9]">
                        The <span className="italic text-gradient block"><TextScramble text="Leadership" delay={0.5} /></span>
                    </h2>
                </MotionReveal>
            </div>

            <div className="relative">
                {founders.map((founder, index) => {
                    const targetScale = 1 - ((founders.length - index) * 0.04)
                    return (
                        <FounderCard
                            key={index}
                            index={index}
                            founder={founder}
                            range={[index * (1 / founders.length), 1]}
                            targetScale={targetScale}
                            progress={scrollYProgress}
                        />
                    )
                })}
            </div>
        </section>
    )
}

import { useEffect, useRef, useCallback, useState, memo } from 'react'
import { motion, useAnimation, useInView, Variants, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface MotionRevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    duration?: number
    direction?: 'up' | 'down' | 'left' | 'right' | 'none'
    distance?: number
    once?: boolean
    staggerChildren?: number
}

export function MotionReveal({
    children,
    className = '',
    delay = 0,
    duration = 0.8,
    direction = 'up',
    distance = 40,
    once = true,
    staggerChildren = 0
}: MotionRevealProps) {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, {
        once,
        amount: 0.1
    })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        } else if (!once) {
            controls.start('hidden')
        }
    }, [controls, inView, once])

    const getDirectionOffset = () => {
        switch (direction) {
            case 'up': return { y: distance }
            case 'down': return { y: -distance }
            case 'left': return { x: distance }
            case 'right': return { x: -distance }
            default: return {}
        }
    }

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...getDirectionOffset(),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.22, 1, 0.36, 1], // expoOut
                staggerChildren,
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function ScrollReveal({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
    return <MotionReveal delay={delay} className={className}>{children}</MotionReveal>
}

export function use3DTilt() {
    const ref = useRef<HTMLDivElement>(null)

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        el.style.transform = `perspective(1200px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`
    }, [])

    const handleMouseLeave = useCallback(() => {
        const el = ref.current
        if (!el) return
        el.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)'
    }, [])

    useEffect(() => {
        const el = ref.current
        if (!el) return
        el.addEventListener('mousemove', handleMouseMove)
        el.addEventListener('mouseleave', handleMouseLeave)
        return () => {
            el.removeEventListener('mousemove', handleMouseMove)
            el.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [handleMouseMove, handleMouseLeave])

    return ref
}

export function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <div
            className={`group relative overflow-hidden rounded-none border border-primary/10 bg-black/40 ${className}`}
            onMouseMove={onMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0,229,255,0.06), transparent 80%)`,
                }}
            />
            {children}
        </div>
    )
}

export const TextScramble = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const [displayText, setDisplayText] = useState(text)
    const chars = '!<>-_\\/[]{}—=+*^?#________'
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true })
    const [started, setStarted] = useState(false)

    useEffect(() => {
        if (inView && !started) {
            const timeout = setTimeout(() => {
                setStarted(true)
                let iteration = 0
                const interval = setInterval(() => {
                    setDisplayText((prev) =>
                        text
                            .split('')
                            .map((char, index) => {
                                if (index < iteration) return text[index]
                                return chars[Math.floor(Math.random() * chars.length)]
                            })
                            .join('')
                    )

                    if (iteration >= text.length) clearInterval(interval)
                    iteration += 1 / 3
                }, 30)
            }, delay * 1000)
            return () => clearTimeout(timeout)
        }
    }, [inView, text, started, delay])

    const handleHover = () => {
        let iteration = 0
        const interval = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split('')
                    .map((char, index) => {
                        if (index < iteration) return text[index]
                        return chars[Math.floor(Math.random() * chars.length)]
                    })
                    .join('')
            )

            if (iteration >= text.length) clearInterval(interval)
            iteration += 1 / 3
        }, 30)
    }

    return (
        <span ref={ref} onMouseEnter={handleHover}>
            {displayText}
        </span>
    )
}

export const CharReveal = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.1 })

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.02,
                delayChildren: delay
            },
        },
    }

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 100,
            },
        },
    }

    return (
        <motion.span
            ref={ref}
            style={{ display: "inline-flex", overflow: "hidden", verticalAlign: "bottom" }}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={className}
        >
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    variants={child}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    )
}

export const Magnetic = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const { left, top, width, height } = ref.current!.getBoundingClientRect()
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        x.set(middleX * 0.3)
        y.set(middleY * 0.3)
    }

    const reset = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            style={{ x: springX, y: springY }}
        >
            {children}
        </motion.div>
    )
}

export const OrbitalDecor = memo(() => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="0.05"
                    fill="none"
                    className="text-primary"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "50px", originY: "50px" }}
                />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="0.03"
                    fill="none"
                    className="text-primary"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{ originX: "50px", originY: "50px" }}
                />
                {[...Array(3)].map((_, i) => (
                    <motion.line
                        key={i}
                        x1="0"
                        y1={30 * i + 20}
                        x2="100"
                        y2={30 * i + 25}
                        stroke="currentColor"
                        strokeWidth="0.02"
                        className="text-primary/10"
                        animate={{ x: [-10, 10, -10] }}
                        transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </svg>
        </div>
    )
})

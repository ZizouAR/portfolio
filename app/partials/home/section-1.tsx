"use client"

import { motion } from "framer-motion"

// Type pour les positions
interface Position {
    top?: string
    bottom?: string
    left?: string
    right?: string
}

interface TechIcon {
    name: string
    icon: React.ReactNode
    color: string
    darkColor?: string
    mobilePosition: Position
    desktopPosition: Position
    delay: number
}

// Icônes SVG des technologies
const techIcons: TechIcon[] = [
    {
        name: "React",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                <path d="M12 21.35c-1.1 0-2.15-.1-3.15-.3-.85-.15-1.65-.4-2.35-.7-.7-.3-1.3-.7-1.8-1.15-.5-.45-.85-.95-1.05-1.5-.2-.55-.2-1.1 0-1.65.2-.55.55-1.05 1.05-1.5.5-.45 1.1-.85 1.8-1.15.7-.3 1.5-.55 2.35-.7 1-.2 2.05-.3 3.15-.3s2.15.1 3.15.3c.85.15 1.65.4 2.35.7.7.3 1.3.7 1.8 1.15.5.45.85.95 1.05 1.5.2.55.2 1.1 0 1.65-.2.55-.55 1.05-1.05 1.5-.5.45-1.1.85-1.8 1.15-.7.3-1.5.55-2.35.7-1 .2-2.05.3-3.15.3Zm0-1.5c.95 0 1.85-.1 2.7-.25.75-.15 1.4-.35 2-.6.55-.25 1-.5 1.35-.8.35-.3.55-.6.65-.9.1-.3.1-.6 0-.9-.1-.3-.3-.6-.65-.9-.35-.3-.8-.55-1.35-.8-.6-.25-1.25-.45-2-.6-.85-.15-1.75-.25-2.7-.25s-1.85.1-2.7.25c-.75.15-1.4.35-2 .6-.55.25-1 .5-1.35.8-.35.3-.55.6-.65.9-.1.3-.1.6 0 .9.1.3.3.6.65.9.35.3.8.55 1.35.8.6.25 1.25.45 2 .6.85.15 1.75.25 2.7.25Z" />
                <path d="M7.1 18.55c-.55-.95-.95-2-1.2-3.1-.2-.95-.3-1.9-.25-2.85.05-.95.2-1.85.45-2.7.25-.85.6-1.6 1.05-2.25.45-.65 1-1.15 1.55-1.45.55-.3 1.15-.4 1.7-.3.55.1 1.1.4 1.55.85.45.45.85 1.05 1.15 1.75.35.8.55 1.7.65 2.7.1.95.1 1.95 0 2.95-.1 1-.3 1.95-.6 2.85-.3.9-.7 1.7-1.15 2.35-.45.65-.95 1.15-1.5 1.45-.55.3-1.1.4-1.65.3-.55-.1-1.05-.35-1.5-.75-.45-.4-.8-.9-1.05-1.5l-.2-.3Zm1.3-.75c.3.5.65.85 1 1.05.35.2.7.25 1.05.15.35-.1.7-.35 1-.75.3-.4.55-.9.75-1.5.25-.7.4-1.45.5-2.25.1-.8.1-1.6.05-2.4-.05-.75-.2-1.45-.4-2.1-.2-.6-.45-1.1-.75-1.45-.3-.35-.6-.55-.95-.6-.35-.05-.7.05-1.05.25-.35.2-.7.55-1 1.05-.3.5-.55 1.1-.7 1.8-.2.8-.3 1.65-.3 2.5 0 .9.1 1.75.3 2.55.15.65.35 1.2.5 1.7Z" />
                <path d="M16.9 18.55c.55-.95.95-2 1.2-3.1.2-.95.3-1.9.25-2.85-.05-.95-.2-1.85-.45-2.7-.25-.85-.6-1.6-1.05-2.25-.45-.65-1-1.15-1.55-1.45-.55-.3-1.15-.4-1.7-.3-.55.1-1.1.4-1.55.85-.45.45-.85 1.05-1.15 1.75-.35.8-.55 1.7-.65 2.7-.1.95-.1 1.95 0 2.95.1 1 .3 1.95.6 2.85.3.9.7 1.7 1.15 2.35.45.65.95 1.15 1.5 1.45.55.3 1.1.4 1.65.3.55-.1 1.05-.35 1.5-.75.45-.4.8-.9 1.05-1.5l.2-.3Zm-1.3-.75c-.3.5-.65.85-1 1.05-.35.2-.7.25-1.05.15-.35-.1-.7-.35-1-.75-.3-.4-.55-.9-.75-1.5-.25-.7-.4-1.45-.5-2.25-.1-.8-.1-1.6-.05-2.4.05-.75.2-1.45.4-2.1.2-.6.45-1.1.75-1.45.3-.35.6-.55.95-.6.35-.05.7.05 1.05.25.35.2.7.55 1 1.05.3.5.55 1.1.7 1.8.2.8.3 1.65.3 2.5 0 .9-.1 1.75-.3 2.55-.15.65-.35 1.2-.5 1.7Z" />
            </svg>
        ),
        color: "#61DAFB",
        // Mobile: coins de l'écran | Desktop: positions originales
        mobilePosition: { top: "8%", left: "5%" },
        desktopPosition: { top: "15%", left: "10%" },
        delay: 0,
    },
    {
        name: "Next.js",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-1.5 14.5L7 11l1.5-1.5 2 2 4.5-4.5L16.5 8.5l-6 8Z" />
            </svg>
        ),
        color: "#000000",
        darkColor: "#FFFFFF",
        mobilePosition: { top: "8%", right: "5%" },
        desktopPosition: { top: "20%", right: "12%" },
        delay: 0.2,
    },
    {
        name: "TypeScript",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M3 3h18v18H3V3Zm10.71 13.32v1.92h-4.9V8.4h4.9v1.92h-2.77v2.14h2.5v1.82h-2.5v3.04h2.77Zm1.69-4.72h1.45v3.2c0 .53.11.92.32 1.17.22.25.55.37 1 .37.45 0 .78-.12 1-.37.21-.25.32-.64.32-1.17v-3.2h1.45v3.36c0 .95-.26 1.67-.77 2.17-.51.49-1.22.74-2.13.74-.9 0-1.61-.25-2.13-.74-.51-.5-.77-1.22-.77-2.17v-3.36h.26Z" />
            </svg>
        ),
        color: "#3178C6",
        mobilePosition: { top: "25%", left: "2%" },
        desktopPosition: { top: "35%", left: "8%" },
        delay: 0.4,
    },
    {
        name: "Node.js",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2L3 7v10l9 5 9-5V7l-9-5Zm0 2.18 6.5 3.64v7.36L12 18.82l-6.5-3.64V7.82L12 4.18ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
            </svg>
        ),
        color: "#339933",
        mobilePosition: { top: "25%", right: "2%" },
        desktopPosition: { top: "35%", right: "8%" },
        delay: 0.6,
    },
    {
        name: "Tailwind",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6ZM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12Z" />
            </svg>
        ),
        color: "#06B6D4",
        mobilePosition: { bottom: "25%", left: "2%" },
        desktopPosition: { top: "60%", left: "6%" },
        delay: 0.8,
    },
    {
        name: "Figma",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M8.5 2A3.5 3.5 0 0 0 5 5.5 3.5 3.5 0 0 0 8.5 9H12V2H8.5ZM15.5 2H12v7h3.5A3.5 3.5 0 0 0 19 5.5 3.5 3.5 0 0 0 15.5 2ZM8.5 9A3.5 3.5 0 0 0 5 12.5 3.5 3.5 0 0 0 8.5 16H12V9H8.5ZM8.5 16A3.5 3.5 0 0 0 5 19.5 3.5 3.5 0 0 0 8.5 23a3.5 3.5 0 0 0 3.5-3.5V16H8.5ZM15.5 9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
            </svg>
        ),
        color: "#F24E1E",
        mobilePosition: { bottom: "25%", right: "2%" },
        desktopPosition: { top: "60%", right: "6%" },
        delay: 1,
    },
    {
        name: "PostgreSQL",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h1v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h1a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7Zm-2 15H9v-1h1v1Zm4 0h-1v-1h1v1Zm1.5-4.5c-.4.3-.5.5-.5.8V15h-1v-1.7c0-.3-.1-.5-.5-.8-.8-.6-1.5-1.5-1.5-2.5a3 3 0 0 1 6 0c0 1-.7 1.9-1.5 2.5Z" />
            </svg>
        ),
        color: "#4169E1",
        mobilePosition: { bottom: "10%", left: "8%" },
        desktopPosition: { top: "80%", left: "12%" },
        delay: 1.2,
    },
    {
        name: "Docker",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M13 4v2h2V4h-2Zm-3 0v2h2V4h-2ZM7 4v2h2V4H7Zm6 3v2h2V7h-2Zm-3 0v2h2V7h-2ZM7 7v2h2V7H7ZM4 7v2h2V7H4Zm9 3v2h2v-2h-2Zm-3 0v2h2v-2h-2Zm-3 0v2h2v-2H7Zm-3 0v2h2v-2H4Zm17.7 1.3c-.4-.4-1.2-.7-2.4-.7-.3 0-.7 0-1 .1-.2-.9-.7-1.6-1.4-2.1l-.3-.2-.2.3c-.3.4-.5.9-.6 1.4-.1.9.2 1.7.7 2.4-.4.2-.9.4-1.3.5-.7.1-1.3.1-2 .1H1v.2c0 1.7.5 3.4 1.5 4.8 1.2 1.6 3 2.5 5.4 2.5 4.2 0 7.4-1.9 8.9-5.5.6 0 1.9 0 2.5-1.3l.1-.2-.2-.1c-.6-.3-1.3-.4-1.5-.5Z" />
            </svg>
        ),
        color: "#2496ED",
        mobilePosition: { bottom: "10%", right: "8%" },
        desktopPosition: { top: "80%", right: "12%" },
        delay: 1.4,
    },
]

const FloatingIcon = ({ tech, index }: { tech: TechIcon; index: number }) => {
    return (
        <>
            {/* Version Mobile */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: tech.delay,
                    type: "spring",
                    stiffness: 200,
                }}
                className="absolute block md:hidden"
                style={{
                    top: tech.mobilePosition.top,
                    left: tech.mobilePosition.left,
                    right: tech.mobilePosition.right,
                    bottom: tech.mobilePosition.bottom,
                }}
            >
                <motion.div
                    animate={{
                        y: [0, -8, 0],
                        rotate: [0, 3, -3, 0],
                    }}
                    transition={{
                        duration: 3 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="group relative"
                >
                    <div
                        className="w-9 h-9 p-2 rounded-xl bg-background/80 border border-foreground/10 shadow-md backdrop-blur-sm"
                        style={{ color: tech.darkColor || tech.color }}
                    >
                        {tech.icon}
                    </div>
                </motion.div>
            </motion.div>

            {/* Version Desktop */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: tech.delay,
                    type: "spring",
                    stiffness: 200,
                }}
                className="absolute hidden md:block"
                style={{
                    top: tech.desktopPosition.top,
                    left: tech.desktopPosition.left,
                    right: tech.desktopPosition.right,
                    bottom: tech.desktopPosition.bottom,
                }}
            >
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 4 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.3 }}
                    className="group relative"
                >
                    <div
                        className="w-12 h-12 lg:w-14 lg:h-14 p-3 rounded-2xl bg-background border border-foreground/10 shadow-lg backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-foreground/30 hover:shadow-xl"
                        style={{ color: tech.darkColor || tech.color }}
                    >
                        {tech.icon}
                    </div>
                    {/* Tooltip - Desktop only */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-xs font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {tech.name}
                    </div>
                    {/* Glow effect */}
                    <div
                        className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10"
                        style={{ backgroundColor: tech.color }}
                    />
                </motion.div>
            </motion.div>
        </>
    )
}

const HomeSection1 = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative">
            {/* Floating tech icons */}
            {techIcons.map((tech, index) => (
                <FloatingIcon key={tech.name} tech={tech} index={index} />
            ))}

            <div className="max-w-3xl space-y-6 relative z-10">
                <div className="opacity-0 animate-fade-up [animation-delay:100ms]">
                    <span className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                        Disponible pour de nouveaux projets
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight opacity-0 animate-fade-up [animation-delay:300ms] leading-tight text-foreground">
                    Ait Rabah <span className="text-zinc-400">Zineddine</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto opacity-0 animate-fade-up [animation-delay:500ms] leading-relaxed">
                    Développeur full-stack passionné par la création d'interfaces <span className="text-foreground font-medium">élégantes</span> et d'architectures <span className="text-foreground font-medium">performantes</span>.
                    Je transforme vos visions en expériences numériques mémorables.
                </p>

                <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 pt-4 opacity-0 animate-fade-up [animation-delay:700ms]">
                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-foreground text-background px-8 py-3 rounded-full font-semibold transition-all hover:opacity-90 hover:scale-105 cursor-pointer"
                    >
                        Mes services
                    </button>
                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="border border-zinc-200 dark:border-zinc-800 px-8 py-3 rounded-full font-semibold transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:scale-105 cursor-pointer"
                    >
                        Me contacter
                    </button>
                </div>
            </div>

            {/* Subtle background gradient */}
            <div className="absolute inset-0 -z-20 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px]" />
            </div>
        </section>
    )
}

export default HomeSection1
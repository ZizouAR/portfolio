"use client"

import { useState, useCallback, useEffect } from "react"
import { ExternalLink, Github, Code2, Globe, Rocket, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from "framer-motion"

const projects = [
    {
        title: "EcoSmart Dashboard",
        description: "Analyse prédictive de consommation énergétique via IA.",
        tech: ["Next.js", "Python", "Tailwind", "D3.js"],
        category: "Fullstack",
        icon: <Rocket className="w-5 h-5" />,
    },
    {
        title: "Lumina Studio",
        description: "Portfolio minimaliste pour agences créatives.",
        tech: ["Framer Motion", "React"],
        category: "Frontend",
        icon: <Globe className="w-5 h-5" />,
    },
    {
        title: "Vortex API",
        description: "Middleware de gestion de flux de données sécurisés.",
        tech: ["Node.js", "Redis", "TypeScript"],
        category: "Backend",
        icon: <Code2 className="w-5 h-5" />,
    },
    {
        title: "Nova Marketplace",
        description: "Plateforme d'échange de biens numériques décentralisée.",
        tech: ["Solidity", "Ether.js", "React"],
        category: "Web3",
        icon: <Rocket className="w-5 h-5" />,
    },
]

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    return (
        <div className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0 pl-4 md:pl-6 select-none">
            <div className="group relative h-[450px] overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.03] backdrop-blur-sm p-8 transition-all hover:bg-foreground/[0.05] hover:border-foreground/20">
                <div className="flex flex-col h-full justify-between gap-6">
                    <div className="space-y-6">
                        <div className="flex justify-between items-start">
                            <div className="p-4 rounded-2xl bg-background border border-foreground/5 shadow-sm group-hover:scale-110 transition-transform">
                                {project.icon}
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2.5 rounded-full border border-foreground/10 hover:bg-background transition-colors shadow-sm">
                                    <Github className="w-4 h-4" />
                                </button>
                                <button className="p-2.5 rounded-full border border-foreground/10 hover:bg-background transition-colors shadow-sm">
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 mb-2 block">{project.category}</span>
                            <h3 className="text-3xl font-bold tracking-tight">{project.title}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed line-clamp-3">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span key={t} className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-foreground/5 border border-foreground/5 text-zinc-500">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Subtle background glow on hover */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
        </div>
    )
}

const HomeProjects = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps'
    })
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(true)

    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index)
    }, [emblaApi])

    return (
        <section id="projects" className="h-screen w-full flex flex-col justify-center items-center py-10 md:py-20 relative overflow-hidden">
            <div className="max-w-7xl w-full px-6 flex flex-col items-center gap-10 md:gap-16">
                <div className="space-y-4 md:space-y-6 text-center max-w-2xl px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Mes Projets</h2>
                        <p className="text-zinc-500 text-base md:text-lg leading-relaxed">
                            Une fusion entre performance technique et finesse visuelle.
                            Faites glisser pour découvrir mes réalisations.
                        </p>
                    </motion.div>
                </div>

                <div className="w-full relative px-4 md:px-0">
                    <div className="overflow-hidden cursor-grab active:cursor-grabbing px-0 md:px-12" ref={emblaRef}>
                        <div className="flex -ml-4 md:-ml-6">
                            {projects.map((p, i) => (
                                <ProjectCard key={i} project={p} />
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none hidden md:flex justify-between px-2">
                        <button
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            className={`p-4 rounded-full border border-foreground/10 bg-background/50 backdrop-blur-md transition-all pointer-events-auto ${!canScrollPrev ? 'opacity-0 scale-90' : 'opacity-100 scale-100 hover:bg-background hover:scale-110'
                                }`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            className={`p-4 rounded-full border border-foreground/10 bg-background/50 backdrop-blur-md transition-all pointer-events-auto ${!canScrollNext ? 'opacity-0 scale-90' : 'opacity-100 scale-100 hover:bg-background hover:scale-110'
                                }`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator / Dots */}
                <div className="flex gap-2.5">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === selectedIndex
                                ? "w-8 bg-indigo-500"
                                : "w-1.5 bg-foreground/10 hover:bg-foreground/20"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-indigo-500/5 blur-[120px] -z-10 pointer-events-none rounded-full" />
        </section>
    )
}

export default HomeProjects


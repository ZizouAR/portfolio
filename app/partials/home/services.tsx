"use client"

import { motion } from "framer-motion"
import { Palette, Globe, Smartphone } from "lucide-react"

const services = [
    {
        id: 1,
        icon: <Palette className="w-8 h-8" />,
        title: "Conception & Design",
        subtitle: "d'applications",
        description: "Création d'interfaces utilisateur intuitives et esthétiques. Je conçois des expériences visuelles qui captivent vos utilisateurs et renforcent votre identité de marque.",
        features: ["UI/UX Design", "Prototypage", "Design System", "Figma"],
        gradient: "from-violet-500 to-purple-600",
        glowColor: "violet-500",
    },
    {
        id: 2,
        icon: <Globe className="w-8 h-8" />,
        title: "Développement",
        subtitle: "de sites web",
        description: "Sites web performants, responsives et optimisés SEO. Du landing page au site e-commerce, je développe des solutions web sur mesure.",
        features: ["React / Next.js", "Performance", "SEO", "Responsive"],
        gradient: "from-blue-500 to-cyan-500",
        glowColor: "blue-500",
    },
    {
        id: 3,
        icon: <Smartphone className="w-8 h-8" />,
        title: "Développement",
        subtitle: "d'apps mobiles",
        description: "Applications mobiles natives et cross-platform. iOS et Android, une seule codebase pour toucher tous vos utilisateurs.",
        features: ["React Native", "iOS", "Android", "Cross-platform"],
        gradient: "from-emerald-500 to-teal-500",
        glowColor: "emerald-500",
    },
]

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group relative"
        >
            <div className="relative h-full overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm p-8 transition-all duration-500 hover:bg-foreground/[0.05] hover:border-foreground/20 hover:scale-[1.02]">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                </div>

                {/* Title */}
                <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                        {service.title}
                    </h3>
                    <span className={`text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.subtitle}
                    </span>
                </div>

                {/* Description */}
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                </p>

                {/* Features/Tech */}
                <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                        <span
                            key={feature}
                            className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-foreground/5 border border-foreground/5 text-zinc-500 transition-colors group-hover:border-foreground/10"
                        >
                            {feature}
                        </span>
                    ))}
                </div>

                {/* Hover glow effect */}
                <div className={`absolute -bottom-32 -right-32 w-64 h-64 bg-${service.glowColor}/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
            </div>
        </motion.div>
    )
}

const HomeServices = () => {
    return (
        <section id="services" className="min-h-screen w-full flex flex-col justify-center items-center py-20  relative overflow-hidden">
            <div className="max-w-7xl w-full px-6 flex flex-col items-center gap-16">
                {/* Header */}
                <div className="space-y-6 text-center max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs font-semibold uppercase tracking-widest text-zinc-500 inline-block">
                            Ce que je propose
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                            Mes Services
                        </h2>
                        <p className="text-zinc-500 text-base md:text-lg leading-relaxed">
                            Des solutions complètes pour donner vie à vos projets digitaux.
                            <br className="hidden md:block" />
                            De la conception à la mise en production.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 items-center"
                >
                    <button className="bg-foreground text-background px-8 py-3.5 rounded-full font-semibold transition-all hover:opacity-90 hover:scale-105 cursor-pointer">
                        Discutons de votre projet
                    </button>
                    <span className="text-zinc-400 text-sm">
                        Réponse sous 24h garantie
                    </span>
                </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-violet-500/5 blur-[120px] -z-10 pointer-events-none rounded-full" />
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] -z-10 pointer-events-none rounded-full" />
        </section>
    )
}

export default HomeServices

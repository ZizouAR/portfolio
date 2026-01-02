"use client"

const HomeSection1 = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
            <div className="max-w-3xl space-y-6">
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

                <div className="flex flex-wrap justify-center gap-4 pt-4 opacity-0 animate-fade-up [animation-delay:700ms]">
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-foreground text-background px-8 py-3 rounded-full font-semibold transition-all hover:opacity-90 cursor-pointer"
                    >
                        Voir mes projets
                    </button>
                    <button className="border border-zinc-200 dark:border-zinc-800 px-8 py-3 rounded-full font-semibold transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900 cursor-pointer">
                        Me contacter
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HomeSection1
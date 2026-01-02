"use client"

import { useTheme } from "next-themes"

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    return (
        <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 ">
            <div className="text-xl font-bold tracking-tighter">Z.AR</div>
            <button
                className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
        </nav>
    )
}

export default Navbar
import { createContext, useState, useContext, useEffect } from "react";
import IThemeContext, { Theme, ThemeMode } from "../types/IThemeContext";
import IProvider from "../types/IProvider";

export const ThemeContext = createContext<IThemeContext>({
    theme: ThemeMode.light,
    setTheme: () => { }
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: IProvider) {
    const [theme, set] = useState<Theme>(ThemeMode.dark);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const setTheme = () => set(theme === ThemeMode.dark ? ThemeMode.light : ThemeMode.dark);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )

} 
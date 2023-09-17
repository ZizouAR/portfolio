import { createContext, useEffect, useState, useContext } from "react";
import IThemeContext, { ThemeMode } from "../types/IThemeContext";
import IProvider from "../types/IProvider";
import LIGHT from "../themes/LIGHT";
import DARK from "../themes/DARK";

export const ThemeContext = createContext<IThemeContext>({
    mode: ThemeMode.DARK,
    theme: {},
    setMode: () => { }
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: IProvider){
    const [mode, set] = useState<ThemeMode>(ThemeMode.DARK);
    const [theme, setTheme] = useState<object>(DARK);

    useEffect(() => {
        setTheme(mode === ThemeMode.DARK ? LIGHT : DARK)
    }, [mode])

    const setMode = () => set(mode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK)

    return (
        <ThemeContext.Provider
        value={{
            mode,
            theme,
            setMode
        }}
        >
            {children}
        </ThemeContext.Provider>
    )

} 
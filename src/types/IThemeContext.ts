
export enum ThemeMode {
    light = "light",
    dark = "dark"
}

export type Theme = keyof typeof ThemeMode;
export default interface IThemeContext {
    theme: Theme;
    setTheme: {
        (): void
    }
}
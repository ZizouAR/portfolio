export enum ThemeMode {
    LIGHT = "LIGHT",
    DARK = "DARK"
}

export default interface IThemeContext {
    mode: ThemeMode;
    theme: object;
    setMode: {
        (): void
    }
}
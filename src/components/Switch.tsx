import { useTheme } from "../contexts/Theme";
import { ThemeMode } from "../types/IThemeContext";

export const Switch = () => {

    const { setTheme, theme } = useTheme();

    return (
        <div className="container-switch">
            <label className="switch">
                <input type="checkbox" onChange={setTheme} checked={theme === ThemeMode.dark} />
                <span className="slider">
                </span>
            </label>
        </div>
    )
}
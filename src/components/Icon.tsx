import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeMode } from "../types/IThemeContext";
import { useTheme } from "../contexts/Theme";
import { IconType } from "../data/technologies";


export default function IconComponent({ name, color }: IconType) {

    const { theme } = useTheme()

    return (
        <FontAwesomeIcon
            //@ts-ignore
            icon={`fa-brands fa-${name}`}
            color={color === '#1C1C1C'
                && theme === ThemeMode.dark
                ? '#FFFFFF'
                : color} size='2x' />
    )
}
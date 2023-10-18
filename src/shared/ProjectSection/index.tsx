import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "../../data/technologies";
import { useTheme } from "../../contexts/Theme";
import { ThemeMode } from "../../types/IThemeContext";
import IProject from "../../data/projects";

export interface IProjectSection extends IProject {
    reversed: boolean;
}

export default function ProjectSection({ title, thumbnail, description, technologies, reversed }: IProjectSection) {

    const { theme } = useTheme();
    return (
        <div className='project-container' style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}>
            <div>
                <h2 className='grand-subtitle'>{title}</h2>
                <p className="caption project-description">
                    {description}
                </p>
                <div className='technologies'>
                    {technologies.map((icon: Icon, index) =>
                        <FontAwesomeIcon
                            //@ts-ignore
                            icon={`fa-brands fa-${icon.name}`}
                            key={index}
                            color={icon.color === '#1C1C1C'
                                && theme === ThemeMode.dark
                                ? '#FFFFFF'
                                : icon.color} size='2x' />
                    )}
                </div>
            </div>
            <div>
                <img src={thumbnail} width="200"  />
            </div>
        </div>
    )
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TECHNOLOGIES, Icon } from '../../data/technologies'
import { getAge } from '../../helpers/getAge'
import { ThemeMode } from '../../types/IThemeContext'
import { useTheme } from '../../contexts/Theme'

export default function Home() {

   const { theme } = useTheme()

   return (
      <div className="main">
         <section className="head">
            <div className="description">
               <h1 className="grand-title">Hey! I am Zineddine</h1>
               <h2>a fullstack Web & Mobile developer</h2>
               <p className="caption">

                  I'm {getAge()} and I've been designing, developing and putting applications into production for companies for a few years now.
                  I also have experience in team and project management. I'm a fan of Typescript and JS frameworks, but not just that...
               </p>
               <div className='technologies'>
                  {TECHNOLOGIES.map((icon: Icon) =>
                     <FontAwesomeIcon
                        //@ts-ignore
                        icon={`fa-brands fa-${icon.name}`}
                        className='icon'
                        color={icon.color === '#1C1C1C'
                           && theme === ThemeMode.dark
                           ? '#FFFFFF'
                           : icon.color} size='2x' />
                  )}
               </div>
            </div>

         </section>
      </div>
   )
}
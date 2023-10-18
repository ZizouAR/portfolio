import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TECHNOLOGIES, Icon } from '../../data/technologies'
import { getAge } from '../../helpers/getAge'
import { ThemeMode } from '../../types/IThemeContext'
import { useTheme } from '../../contexts/Theme'
import MagicFeather from '../../components/MagicFeather'
import Button from '../../components/Button'
import ProjectSection from '../../shared/ProjectSection'
import IProject, { Projects } from '../../data/projects'

export default function Home() {

   const { theme } = useTheme()

   return (
      <div>

         <section className="section">
            <div className="description">
               <h1 className="grand-title"><MagicFeather text='Hey! I am Zineddine' /></h1>
               <h2 className="grand-subtitle"><MagicFeather text='a fullstack Web & Mobile developer' startIn={1500} /></h2>
               <p className="caption">
                  I'm {getAge()} and I've been designing, developing and putting applications into production for companies for a few years now.
                  I also have experience in team and project management. I'm a fan of Typescript and JS frameworks, but not just that...
               </p>
               <div className='technologies' style={{ justifyContent: 'center' }}>
                  {TECHNOLOGIES.map((icon: Icon, index) =>
                     <FontAwesomeIcon
                        //@ts-ignore
                        icon={`fa-brands fa-${icon.name}`}
                        className='icon'
                        key={index}
                        color={icon.color === '#1C1C1C'
                           && theme === ThemeMode.dark
                           ? '#FFFFFF'
                           : icon.color} size='2x' />
                  )}
               </div>
               <Button anchor='projects'>
                  Let's see more
               </Button>
            </div>
         </section>

         <section className='section' id='projects'>
            <div className='container'>
               <h2 className="grand-title" style={{ alignSelf: 'center', marginBottom: '5%' }}>My projects</h2>
               {Projects.map((project: IProject, index) => <ProjectSection {...project} key={index} reversed={!!(index & 1)} />)}
            </div>
         </section>
      </div>
   )
}
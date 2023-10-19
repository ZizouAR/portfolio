import { useEffect, useRef } from "react";
import IProject from "../../data/projects";
import { motion, useAnimation, useInView } from 'framer-motion'
import Icon from "../../components/Icon";
import { IconType } from "../../data/technologies";
export interface IProjectSection extends IProject {
    reversed: boolean;
}

export default function ProjectSection({ title, thumbnail, description, technologies, reversed }: IProjectSection) {

    const controls = useAnimation();
    const ref = useRef<any>(null);

    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
          controls.start("visible");
        }
      }, [controls, isInView]);

    return (
        <motion.div
            initial="hidden"
            animate={controls}
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1, delay: 0.25 }}
            className='project-container'
            style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}>

            <div className="project-description">
                <h2 className='grand-subtitle'>{title}</h2>
                <p className="caption project-description">
                    {description}
                </p>
                <div className='technologies'>
                    {technologies.map((icon: IconType, index) => <Icon {...icon} key={index} /> )}
                </div>
            </div>
            <div className="project-thumbnail">
                <img src={thumbnail} width="200" />
            </div>
        </motion.div>
    )
}
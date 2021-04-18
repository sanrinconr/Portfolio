import { SkillView } from '../Skill/SkillView';
import styles from "./SkillsView.module.css"
export function SkillsView({skills, type}){
    return <div className={styles.container}>
        {skills.map((skill, index)=>{
            return <SkillView key={index} id={index} type={type} image={skill.img} title={skill.name}/>
        })}
    </div>
}

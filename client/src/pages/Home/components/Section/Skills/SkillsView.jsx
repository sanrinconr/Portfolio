import { SkillView } from '../Skill/SkillView';
import styles from "./SkillsView.module.css"
export function SkillsView({skills}){
    return <div className={styles.container}>
        {skills.map((skill, index)=>{
            return <SkillView key={index} image={skill.img} title={skill.name}/>
        })}
    </div>
}

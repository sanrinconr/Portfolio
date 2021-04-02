import styles from "./SkillView.module.css"
export function SkillView({title, image}){
    return <div className={styles.container}>
        <img src={image} alt=""/>
        <h2>{title}</h2>
    </div>
}
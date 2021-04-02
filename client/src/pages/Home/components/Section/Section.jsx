import styles from "./Section.module.css"
export default function Section({title, children}){
    return <div className={styles.container}>
        <h1>{title}</h1>
        {children?children:"This seccion dont have a children element to render"}
    </div>
}
import styles from "./Section.module.css"
export default function Section({id, title, children}){

    return <div style={{backgroundColor: defineColor(id)}} className={styles.container}>
        <h1>{title}</h1>
        {children?children:"This seccion dont have a children element to render"}
    </div>
}

function defineColor(id){
    switch(id){
        case "sectionTools":
            return "#757575"
        case "sectionTheoretical":
            return "#373737"
        case "sectionForm":
            return "#757575"
        default:
            return "#757575"
    }
}
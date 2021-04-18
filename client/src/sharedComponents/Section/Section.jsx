import styles from "./Section.module.css"
export default function Section({theme, title, children}){

    return <div style={{backgroundColor: defineColor(theme)}} className={styles.container}>
        {title? <h1 className={styles.center}>{title}</h1> : ""}
        {children?children:"This seccion dont have a children element to render"}
    </div>
}

function defineColor(theme){
    switch(theme){
        case "white":
            return "#757575"
        case "black":
            return "#373737"
        default:
            return "#757575"
    }
}
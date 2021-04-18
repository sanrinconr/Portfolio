import styles from "./Section.module.css"
export default function Section({theme, title, children}){

    return <div style={{backgroundColor: defineColor(theme)}} className={styles.container}>
        <h1>{title}</h1>
        {children?children:"This seccion dont have a children element to render"}
    </div>
}

function defineColor(theme){
    switch(theme){
        case "black":
            return "#757575"
        case "white":
            return "#373737"
        default:
            return "#757575"
    }
}
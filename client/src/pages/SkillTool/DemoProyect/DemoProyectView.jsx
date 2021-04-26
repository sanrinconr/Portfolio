import styles from "./DemoProyectView.module.scss"
export function DemoProyectView({img, description, liveDemo, gitLink}){
    console.log(description)
    return <div className={styles.container}>
        <div className={styles.description}>
            <p>{description}</p>
        </div>
        <div className={styles.proyectImage}>
            <img src={img} alt=""/>
        </div>
        <div className={styles.buttons}>
            <a className={styles.btn} target="_blank" href={liveDemo} rel="noreferrer">Live demo</a>
            <a className={styles.btn} target="_blank" href={gitLink} rel="noreferrer">Github</a>
        </div>
    </div>

}
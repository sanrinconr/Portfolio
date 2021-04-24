import styles from "./DemoProyectView.module.scss"
export function DemoProyectView({img, liveDemo, gitLink}){
    return <div className={styles.container}>
        <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dignissimos provident id nostrum, numquam consequatur. Expedita assumenda quis nisi aliquid error porro fuga minima voluptate voluptatum. Dignissimos vitae est fugit?</p>
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
import profile from "../../../../assets/images/profile.jpg"

import styles from "./PresentationPerson.module.css"
export function PresentationPerson(){
    return <div className={styles.container}>
        <div className={styles.typewriter}>
            <h2><b>Hi!, i'm a full-stack developer</b></h2>
        </div>
        <img src={profile} alt=""/>
    </div>
}
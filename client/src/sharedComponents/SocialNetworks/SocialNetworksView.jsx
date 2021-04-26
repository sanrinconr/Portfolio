import styles from "./SocialNetworksView.module.scss"
import github from "./img/githubLight.svg"
import linkedIn from "./img/linkedIn.png"
export function SocialNetworksView(){
    return <div className={styles.data}>
    <div className={styles.social}>
        <a href="https://github.com/sanrinconr/" target="_blank" rel="noopener noreferrer" >
            <img src={github} alt=""/>
        </a>
        <a href="https://www.linkedin.com/in/sanrinconr/" target="_blank" rel="noopener noreferrer" >
            <img src={linkedIn} alt=""/>
        </a>
    </div>
</div>
}
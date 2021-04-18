import Section from "../../sharedComponents/Section/Section"
import styles from  "./SkillTheoreticalView.module.scss"
import githubLogo from "../../assets/theoretical/githubLogo.svg"
import leetCodeLogo from "../../assets/theoretical/leetCodeLogo.svg"
import { useEffect } from "react";

export function SkillTheoreticalView({name, description,img, idea, animation,gitLink}){
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, []);
    return <div>
        <Section theme="black" title={name}>
            <div className={styles.img}>
                <img src={img} alt=""/>
            </div>
        </Section>
        <Section theme="white" title={`How can i show the skill?. LeetCode problem!`}>
            <div className={styles.description}>
                <img src={leetCodeLogo} alt=""/>
                <div>
                    <p>{description}</p>
                </div>
            </div>
        </Section>
        <Section theme="black" title="How i solved?..">
            <div className={styles.descriptionSolution}>
                <div>
                    <p>{idea}</p>
                </div>
                <img src={animation} alt=""/>
            </div>
        </Section>
        <Section theme="white">
            <a href={gitLink} target="_blank" rel="noreferrer"> 
                <div className={styles.linkToSolution}>
                    <p>Get full solution in github!</p>
                    <img className={styles.img} src={githubLogo} alt=""/>
                </div>
            </a>
        </Section>
    </div>
}
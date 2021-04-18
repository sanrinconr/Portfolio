import { useEffect } from "react";
import { ContactFormContainer } from "../../sharedComponents/ContactForm/ContactFormContainer";
import Section from "../../sharedComponents/Section/Section";
import styles from "./SkillToolView.module.scss"
export function SkillToolView({name, img}){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return <div>
        <Section theme="black" title={name}>
            <div className={styles.img}>
                <img src={img} alt=""/>
            </div>
        </Section>
         <Section theme="white" title={`My work`}>
            <div className={styles.description}>
                <img src={img} alt=""/>
                <div>
                    <p>jujuju</p>
                </div>
            </div>
        </Section>
        <Section theme="black" title={`What can i do`}>
            <div className={styles.description}>
                <div>
                    <p>jujuju</p>
                </div>
            </div>
        </Section>
        <Section theme="white" title={`Interested in my work?, contact me!`}>
            <ContactFormContainer/>
        </Section>
        {/*<Section theme="black" title="How i solved?..">
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
                    <p>Click here to get full solution in github!</p>
                    <img className={styles.img} src={githubLogo} alt=""/>
                </div>
            </a>
        </Section> */}
        </div>
}
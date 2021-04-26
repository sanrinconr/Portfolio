import { useEffect } from "react";
import { ContactFormContainer } from "../../sharedComponents/ContactForm/ContactFormContainer";
import { SocialNetwoksContainer } from "../../sharedComponents/SocialNetworks/SocialNetworksContainer"
import Section from "../../sharedComponents/Section/Section";
import { DemoProyectContainer } from "./DemoProyect/DemoProyectContainer";
import styles from "./SkillToolView.module.scss"
export function SkillToolView({id, name, img, whatCan}){
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
            <DemoProyectContainer id={id}/>
        </Section>
        {/* <Section theme="black" title={`What can i do`}>
            <div className={styles.description}>
                <div>
                    <p>{whatCan}</p>
                </div>
            </div>
        </Section> */}
        <Section theme="black" title={`Networks`}>
            <SocialNetwoksContainer/>
        </Section>
        <Section theme="white" title={`If you wanna, send me a message!`}>
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
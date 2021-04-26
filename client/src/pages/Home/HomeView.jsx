import { ContactFormContainer } from "../../sharedComponents/ContactForm/ContactFormContainer";
import { PresentationPerson } from "./components/PresentationPerson/PresentationPerson";
import Section from "../../sharedComponents/Section/Section";
import SkillsContainer from "./components/Skills/SkillsContainer";
import style from "./HomeView.module.css"
import { SocialNetwoksContainer } from "../../sharedComponents/SocialNetworks/SocialNetworksContainer";
export function HomeView(){
    return <div className={style.container}>
        <PresentationPerson/>
        <Section theme="white" title="What's my skills?">
            <SkillsContainer type="tools"/>
        </Section>
        <Section theme="black" title="Theoretical knowledge">
            <SkillsContainer type="theoretical"/>
        </Section>
        <Section theme="white" title={`Networks`}>
            <SocialNetwoksContainer/>
        </Section>
        <Section theme="black" title="If you wanna, send me a message!">
            <ContactFormContainer/>
        </Section>
    </div>
}
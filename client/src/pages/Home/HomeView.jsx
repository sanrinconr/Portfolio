import { ContactFormContainer } from "./components/ContactForm/ContactFormContainer";
import { PresentationPerson } from "./components/PresentationPerson/PresentationPerson";
import Section from "./components/Section/Section";
import SkillsContainer from "./components/Section/Skills/SkillsContainer";
import style from "./HomeView.module.css"
export function HomeView(){
    return <div className={style.container}>
        <PresentationPerson/>
        <Section id="sectionTools" title="What's my skills?">
            <SkillsContainer type="tools"/>
        </Section>
        <Section id="sectionTheoretical" title="Theoretical knowledge">
            <SkillsContainer type="theoretical"/>
        </Section>
        <Section id="sectionForm" title="Contact form">
            <ContactFormContainer/>
        </Section>
    </div>
}
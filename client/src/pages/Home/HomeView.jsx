import { PresentationPerson } from "./components/PresentationPerson/PresentationPerson";
import Section from "./components/Section/Section";
import SkillsContainer from "./components/Section/Skills/SkillsContainer";
import style from "./HomeView.module.css"
export function HomeView(){
    return <div className={style.container}>
        <PresentationPerson/>
        <Section id="sectionTools" title="What's my skills?">
            <SkillsContainer/>
        </Section>
        <Section id="sectionTheoretical" title="Theoretical knowledge">
            <SkillsContainer/>
        </Section>
    </div>
}
import { useSelector } from "react-redux";
import {SkillTheoreticalView} from "./SkillTheoreticalView";

export function SkillTheoreticalContainer({id}){
    let data = useSelector((state)=>state.skills.theoretical[id])
    return <SkillTheoreticalView 
        name={data.name} 
        description={data.description}
        img={data.img}
        idea={data.idea}
        gitLink={data.gitLink}
        animation= {data.animation}/>
}
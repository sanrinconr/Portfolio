import { useSelector } from "react-redux";
import {SkillTheoreticalView} from "./SkillTheoreticalView";

export function SkillTheoreticalContainer({id}){
    let skill = useSelector((state)=>state.skills.theoretical[id])
    console.log(skill)
    return <SkillTheoreticalView/>
}
import {SkillToolView} from "./SkillToolView";
import {useSelector} from "react-redux"
export function SkillToolContainer({id}){
    let data = useSelector((state)=>state.skills.tools[id])
    return <SkillToolView id={id} name={data.name} img={data.img} whatCan={data.whatCan}/>
}
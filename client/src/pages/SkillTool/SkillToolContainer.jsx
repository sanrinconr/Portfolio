import {SkillToolView} from "./SkillToolView";
import {connect, useSelector} from "react-redux"
function SkillToolContainer({id,name}){
    let data = useSelector((state)=>state.skills.tools[id])
    console.log(data)
    return <SkillToolView name={data.name} img={data.img}/>
}

const mapStateToProps = (state)=>{
    return state.skills
}

export const connected = connect(mapStateToProps)(SkillToolContainer)


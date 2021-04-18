import {SkillToolView} from "./SkillToolView";
import {connect} from "react-redux"
function SkillToolContainer({name}){
    return <SkillToolView name={name}/>
}

const mapStateToProps = (state)=>{
    return state.skills
}

export const connected = connect(mapStateToProps)(SkillToolContainer)


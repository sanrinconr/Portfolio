import { connect } from 'react-redux';
import {SkillsView} from "./SkillsView"
function SkillsContainer({skills}){
    return <SkillsView skills={skills}/>
}

const mapStateToProps = (state, ownProps)=>{
    switch(ownProps.type){
        case "tools":
            return {skills:state.skills.tools}
        case "theoretical":
            return {skills:state.skills.theoretical}
        default:
            return {skills:{name:"none",img:"none"}}
    }
}

export default connect(mapStateToProps)(SkillsContainer)
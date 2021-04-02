import { connect } from 'react-redux';
import {SkillsView} from "./SkillsView"
function SkillsContainer({skills}){
    return <SkillsView skills={skills}/>
}

const mapStateToProps = state=>{
    console.log({skills:state.skill})
    return {skills:state.skill}
}

export default connect(mapStateToProps)(SkillsContainer)
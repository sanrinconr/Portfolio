import { Switch, Route } from "react-router-dom";
import { DETAIL_SKILL_THEORETICAL, DETAIL_SKILL_TOOL, HOME } from "./CONSTANTS";
import Home from "../pages/Home/index"
import { SkillTheoreticalContainer } from "../pages/SkillTheoretical/SkillTheoreticalContainer";
import SkillToolContainer from "../pages/SkillTool";
import NotFound from "./NotFound";
export function RouterConfig(){
    return <div>
        <Switch>
            <Route exact path={HOME} component={Home}/>
            <Route exact path={DETAIL_SKILL_TOOL+"/:id"} component={({match})=>{
                return <SkillToolContainer id={match.params.id}/>    
            }}/>
            <Route exact path={DETAIL_SKILL_THEORETICAL+"/:id"} component={({match})=>{
                return <SkillTheoreticalContainer id={match.params.id}/>
            }}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </div>
}
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
            <Route exact path={DETAIL_SKILL_THEORETICAL} component={SkillTheoreticalContainer}/>
            <Route exact path={DETAIL_SKILL_TOOL} component={SkillToolContainer}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </div>
}
import { useSelector } from "react-redux";
import {DemoProyectView} from "./DemoProyectView";

export function DemoProyectContainer({id}){
    const data = useSelector( state => {
        console.log(state.skills.tools)
        return state.skills.tools[id]
    } )
    return <DemoProyectView img={data.appImg} description={data.description} liveDemo={data.liveDemo} gitLink={data.gitLink}/>
}
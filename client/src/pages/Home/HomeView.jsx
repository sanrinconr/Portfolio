import { PresentationPerson } from "./components/PresentationPerson/PresentationPerson";
import style from "./HomeView.module.css"
export function HomeView(){
    return <div className={style.container}>
        <PresentationPerson/>
    </div>
}
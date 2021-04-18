import { useEffect, useState } from "react"
import styles from "./SkillView.module.css"
import {Link} from "react-router-dom"
export function SkillView({title,id, image, type}){
    const [url, setUrl]= useState("")
    useEffect(()=>{
        console.log(type)
        if(type === "tools"){
            setUrl("/skill/"+id)
        }else if(type === "theoretical"){
            setUrl("/skillTheoretical/"+id)
        }
    },[type, setUrl, id])
   
    return <Link to={url} style={{ textDecoration: 'none' }}>
        {console.log(url)}
        <div className={styles.container}>
            <img src={image} alt=""/>
            <hr/>
            <span><b>{title}</b></span>
        </div>
    </Link>
}
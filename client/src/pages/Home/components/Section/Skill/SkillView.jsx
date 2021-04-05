import { useEffect, useState } from "react"
import styles from "./SkillView.module.css"
import {Link} from "react-router-dom"
export function SkillView({title, image, type}){
    const [url, setUrl]= useState("")
    useEffect(()=>{
        console.log(type)
        if(type === "tools"){
            setUrl("/skill")
        }else if(type === "theoretical"){
            setUrl("/skillTheoretical")
        }
    },[type, setUrl])
   
    return <Link to={url} style={{ textDecoration: 'none' }}>
        {console.log(url)}
        <div className={styles.container}>
            <img src={image} alt=""/>
            <hr/>
            <span><b>{title}</b></span>
        </div>
    </Link>
}
import { useState } from "react"
import styles from "./ContactFormView.module.css"

export function ContactFormView({submitCallback}){
    const [input,setInput] = useState({
        message:"",
        contact:""
    })

    function handleChange(e){
        const target = e.target;
        const name =  target.name;
        const value = target.value;
        setInput({...input,[name]:value})
    }
    function handleSubmit(e){
        e.preventDefault()
        submitCallback(input.message,input.contact)
        .then(()=>{
            setInput({
                message:"",
                contact:""
            })
        })
    }


    return <form 
    onSubmit={(e)=>handleSubmit(e)}
    className={styles.form}>	
    <textarea
        onChange={handleChange}
        name="message" 
        placeholder="Message" 
        rows="6"
        value={input.message} 
        required></textarea>
    <input 
        onChange={handleChange}
        name="contact" 
        type="text" 
        placeholder="Where can i contact you?" 
        maxLength="80" 
        value={input.contact}
        required/>

    <button 
        id="send" 
        name="send" 
        type="submit" 
        className="btn">SEND</button>
    </form>	
}
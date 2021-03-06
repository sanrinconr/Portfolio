import { sendMessage } from "../../services/userServices";
import { ContactFormView } from "./ContactFormView";

export function ContactFormContainer(){
    return <ContactFormView submitCallback={onClickButtonSubmit}/>
}
function onClickButtonSubmit(message, contact){
    return sendMessage(message,contact)
    .then((res)=>{
        if(res.data.ok){
            alert("Message sent, i will contact you as soon as possible, thanks!")
        }else{
            alert("A error ocurred, try again")
        }
    })
    .catch(err=>{
        alert("A error ocurred, try again")
    })
}
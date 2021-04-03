import { sendMessage } from "../../../../services";
import { ContactFormView } from "./ContactFormView";

export function ContactFormContainer(){
    return <ContactFormView submitCallback={onClickButtonSubmit}/>
}
function onClickButtonSubmit(message, contact){
    sendMessage(message,contact)
}
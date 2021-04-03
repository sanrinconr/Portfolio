import axios from "axios"
export function sendMessage(message, where_contact){
    const TOKEN = process.env.REACT_APP_BOT_TELEGRAM_TOKEN
    const CHAT_ID = process.env.REACT_APP_CHAT_ID_SANTIAGO
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`
    // const detailMessage = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=HTML&text=${message}%0a %0a${where_contact}`

    return axios.post(URL,{
        chat_id:CHAT_ID,
        text:`Message: ${message}\n \nContact info:\n ${where_contact}`
    })
    .then((res)=>{
        return res
    })
    .catch(err=>{
        return err
    })
}
import axios from "axios"
export function sendMessage(message, where_contact){
    const TOKEN = process.env.REACT_APP_BOT_TELEGRAM_TOKEN
    const CHAT_ID = process.env.REACT_APP_CHAT_ID_SANTIAGO
    const detailMessage = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${message}%0a %0a${where_contact}`

    return axios.get(detailMessage)
    .then(()=>{
        return true
    })
}
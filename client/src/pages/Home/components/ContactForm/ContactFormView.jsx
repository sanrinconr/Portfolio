export function ContactFormView({submitCallback}){
    return <div>
        Hi! contact form here!
        <button onClick={()=>submitCallback("Hi i'm interested in you work you wanna talk?","write me to fdds@gmail.com")}>Send message!</button>
    </div>
}
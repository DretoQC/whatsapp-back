import axios from "axios";

export default async function SendMessage (request, reply) {
     try {
    axios.defaults.headers.common["apiKey"]="teste"
     axios.post("https://e227-189-11-99-111.ngrok-free.app/message/sendText/teste", {
        "number":"554191116634",
        text: "pussy"
    }, {headers:{
       "Content-Type": "application/json", "apiKey": "teste"
    }})
    } catch (error) {
        console.log("ass")
     }
}

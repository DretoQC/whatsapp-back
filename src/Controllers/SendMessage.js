import axios from "axios";

export default async function SendMessage(request, reply) {
    try {
        await axios.post("http://f12b-189-11-99-111.ngrok-free.app/message/sendText/teste", {
            "number": "554191116634",
            text: "pussy"
        }, {
            headers: {
                "Content-Type": "application/json", "apiKey": "234234234234243"
            }
        })
    } catch (error) {
        console.log("ass")
    }
}

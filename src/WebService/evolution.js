import axios from "axios"
import * as dotenv from 'dotenv'

const headers = {headers:{
    "apiKey":process.env.EVOLUTION_API_KEY
}}
async function createInstance (instancedata) {
    try {
        const request = await axios.post(`${process.env.EVOLUTION_URL}/instance/create`, instancedata, headers)
        return request.data
    }catch(error) { 
        console.error(error)
    }
};

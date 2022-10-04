import axios from "axios";
import Config from '@config/index.config';

console.log("API URL: ", Config?.API);

const jetlexaApiInstance = axios.create({
    baseURL: Config.API
})

export default jetlexaApiInstance;
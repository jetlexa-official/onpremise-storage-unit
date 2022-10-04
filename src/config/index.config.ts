/* STRING TO BOOLEAN CONVERTER */
import { StringToBoolean } from "@config/methods/index.methods";
/* CONFIGURATION INTERFACE */
import { IConfigType } from "@config/interfaces/index.interfaces";

const Config: IConfigType = {
    ENDPOINT: process.env.ENDPOINT || 'http://localhost:8081/',
    HOSTNAME: process.env.HOSTNAME || 'http://localhost:8081/api',
    PORT: Number(process.env.PORT) || 8081,
    LOGGER: process.env.LOGGER || 'dev',
    HTTPS_ENABLED: StringToBoolean(process.env.HTTPS_ENABLED) || false,
    SWAGGER_ENABLED: StringToBoolean(process.env.SWAGGER_ENABLED) || false,
    CURRENT_ENVIRONMENT: process.env.CURRENT_ENVIRONMENT || "development",
    FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
    BACKEND_URL: process.env.BACKEND_URL || "http://localhost:8081",
    API: process.env.API || "http://localhost:80/api",
}
console.table(Config);
export default Config;
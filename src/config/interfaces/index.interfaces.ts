export interface SwitcherType {
    PRODUCTION: boolean,
    STAGING: boolean,
    DEVELOPMENT: boolean
}

export interface IConfigType {
    ENDPOINT: string;
    HOSTNAME: string;
    PORT: number;
    LOGGER: string;
    HTTPS_ENABLED: boolean;
    CURRENT_ENVIRONMENT: string;
    SWAGGER_ENABLED: boolean;
    FRONTEND_URL: string;
    BACKEND_URL: string;
    API: string;
}
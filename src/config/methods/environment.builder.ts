import path from 'path';
import dotenv from 'dotenv';
import Switcher from '@config/index.params';

export enum ENV_TYPES {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    STAGING = "staging"
}

const environmentDecider = (): string => {
    console.log(Switcher);
    if (Switcher.PRODUCTION) {
        return ENV_TYPES.PRODUCTION;
    } else if (Switcher.STAGING) {
        return ENV_TYPES.STAGING;
    } else {
        return ENV_TYPES.DEVELOPMENT;
    }
}

export const CURRENT_ENVIRONMENT = environmentDecider() || ENV_TYPES?.PRODUCTION;

export const EnvironmentBuilder = (): string => {
    const envPath: string = `../../../environments/.${CURRENT_ENVIRONMENT}`;
    console.log(path.join(__dirname, envPath))
    return path.join(__dirname, envPath);
}

dotenv.config({ path: EnvironmentBuilder() });
import jetlexa from "@clients/api.jetlexa";
import ApiError from "@error/ApiError";
import ApiErrorStore from '@error/api-errors/index.errors';
import { AsyncControllerTypeWithNext } from "@interfaces/express.middlewares";

export const externalAuthorizeRequest: AsyncControllerTypeWithNext = async (req: any, res, next) => {
    try {
        if (req?.headers?.authorization) {
            jetlexa.defaults.headers.common.Authorization = req.headers.authorization;
        }
        if (req.query?.accessKey) {
            jetlexa.defaults.headers.common.Authorization = "Bearer " + req.query?.accessKey;
        }

        if (!req?.headers?.authorization && !req.query?.accessKey) {
            throw new Error("Authorization header not found");
        }

        const response = await jetlexa.post('/cdn/ext/authorize', {}, {
            headers: {
                'Content-Type': 'application/json'
                //'Authorization': `${req.headers.authorization}`
            }
        }).then((response) => {
            console.log('RESP@@@@@@', response.data);
            return response;
        }).catch((error) => {
            console.log('ERROR@@@@@', error);
            throw error;
        });
        req.user = response?.data?.node?.user;
        req.jetlexaApi = jetlexa;
        next();
    } catch (error) {
        //next();
        throw new ApiError(ApiErrorStore.UNAUTHORIZED);
    }
}
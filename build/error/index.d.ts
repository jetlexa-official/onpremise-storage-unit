/// <reference types="express" />
import ApiError from "./ApiError";
declare const _default: {
    ApiError: typeof ApiError;
    GenericErrorHandler: (err: import("./interfaces/GenericErrorHandler.interfaces").IError, req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>>, next: import("express").NextFunction) => void;
};
export default _default;

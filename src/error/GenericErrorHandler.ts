import ApiError from "@error/ApiError";
import { NextFunction, Request, Response } from "express";
import { IError } from '@error/interfaces/GenericErrorHandler.interfaces';

/* Generic Error Handler For Express Application */
const GenericErrorHandler = (err: IError, req: Request, res: Response, next: NextFunction) => {
    if (!(err instanceof ApiError)) {
        console.error(err);
    }
    if (/\w+ validation failed: \w+/i.test(err.message)) {
        err.message = err.message.replace(/\w+ validation failed: \w+/i, "")
    }
    res.status(err.status || 500).json({
        response: {
            status: err?.status,
            code: err?.code,
            message: err?.message,
        }
    })
}

export default GenericErrorHandler;
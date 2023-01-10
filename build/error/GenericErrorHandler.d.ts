import { NextFunction, Request, Response } from "express";
import { IError } from './interfaces/GenericErrorHandler.interfaces';
declare const GenericErrorHandler: (err: IError, req: Request, res: Response, next: NextFunction) => void;
export default GenericErrorHandler;

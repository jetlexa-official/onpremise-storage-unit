import { Request, Response, NextFunction } from "express";
export type IAuthorizationMiddleware = {
    (req: Request, res: Response, next: NextFunction): void;
};

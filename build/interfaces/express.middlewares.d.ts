import { AxiosInstance } from "axios";
import { Router } from "express";
import { Request, Response, NextFunction } from 'express';
interface MicroServiceRequest extends Request {
    jetlexaApi?: AxiosInstance;
}
export type AsyncControllerType = (req: MicroServiceRequest, res: Response) => Promise<void>;
export type AsyncControllerTypeWithNext = (req: Request, res: Response, next: NextFunction) => Promise<void>;
export type SyncControllerType = (req: Request, res: Response) => void;
export type SyncControllerTypeWithNext = (req: Request, res: Response, next: NextFunction) => void;
export type SessionedAsyncControllerType = (req: SessionedRequest, res: Response) => Promise<void>;
export type SessionedAsyncControllerTypeWithNext = (req: SessionedRequest, res: Response, next: NextFunction) => Promise<void>;
export type SessionedSyncControllerType = (req: SessionedRequest, res: Response) => void;
export type SessionedSyncControllerTypeWithNext = (req: SessionedRequest, res: Response, next: NextFunction) => void;
export interface SessionedRequest extends Request {
    user?: any;
    files?: any;
    jetlexaApi: AxiosInstance;
}
export type RouterFunction = (router: Router) => void;
export type RouterFunctionArray = RouterFunction[];
export {};

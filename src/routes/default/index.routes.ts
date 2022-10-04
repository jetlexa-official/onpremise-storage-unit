import express, { Router } from 'express';
import Main from '@routes/default/main.routes';
/* TYPES */
import { RouterFunctionArray } from '@routes/api/interfaces/index.interfaces';
/* TYPES ENDS */
const Routes: RouterFunctionArray = [
    Main
];

const DefaultRouter: Router = express.Router();

Routes.forEach((RouterFn) => {
    RouterFn(DefaultRouter);
})

export default DefaultRouter;
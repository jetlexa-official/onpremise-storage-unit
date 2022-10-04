import express, { Router } from 'express';
/* Router Functions From Services */
/* TYPES */
import { RouterFunctionArray } from '@routes/api/interfaces/index.interfaces';
/* SWAGGER */
import "@routes/api/swagger-types/index.swagger";

/* Router Functions */

import LocalRouterFn from '@services/Local/routes/index.routes';

/* Router Functions ENDS */



const Routes: RouterFunctionArray = [
    LocalRouterFn
];

const ApiRouter: Router = express.Router();

Routes.forEach((RouterFn) => {
    RouterFn(ApiRouter);
})

export default ApiRouter;
import express, { Express, Response, Router } from 'express';
import logger from 'morgan';
import cors from 'cors';
import helmet, { contentSecurityPolicy } from 'helmet';
import path from 'path';
import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import favicon from 'favicon';

/* EXPRESS APP DONT KILL PROCESS ON ERROR */
import 'express-async-errors';

/* API ROUTER FROM ROUTES FOLDER */
import ApiRouter from '@routes/api/index.routes';

/* DEFAULT ROUTER */
import DefaultRouter from '@routes/default/index.routes';

/* GLOBAL CONFIGURATION FILE */
import Config from '@config/index.config';

/* SWAGGER_GENERATOR */
import SwaggerDocsCreator from "@middlewares/Swagger/index.swagger";

/* Generic Error Handler */
import GenericErrorHandler from '@error/GenericErrorHandler';

/* ApiError */
import ApiError from '@error/ApiError';

/* ApiErrorStore */
import ApiErrorStore from '@error/api-errors/index.errors';
import { authorizeRequest } from '@middlewares/Authorization/index.authorization';



/* EXPRESS APP INITIALIZER */
const app = express();

/* FAVICON SET FOR THE REQUESTS */
favicon(Config?.BACKEND_URL + "/favicon.ico", (err) => {
    if (err) {
        console.log(err);
    }
});

/* CORS */
app.use(cors());

/* MORGAN LOGGER */
app.use(logger(Config?.LOGGER));

/* HELMET SECURITY HEADERS */
app.use(helmet());





/* EXPRESS BODY PARSER */
app.use(express.json());

/* EXPRESS URL ENCODED PARSER */
/* app.use(express.urlencoded({
    extended: true,
    limit: '1gb'
})); */


/* AUTHORIZATION MIDDLEWARE */
//app.use(passport.initialize())

app.use(authorizeRequest);

/* ROUTER */
/* PUBLIC FILES STATIC SERVING */
app.use(express.static(path.join(__dirname, './public')));

/* EXPRESS ROUTER FOR API */
app.use('/api', ApiRouter);

/* SWAGGER GENERATOR FUNCTION INVOKE */
if (Config?.SWAGGER_ENABLED) {
    SwaggerDocsCreator(app);
}

/* DEFAULT ROUTER */
app.use('/', DefaultRouter);

/* PUBLIC */

/* Generic Error Handler */
app.use(GenericErrorHandler);

export default app;
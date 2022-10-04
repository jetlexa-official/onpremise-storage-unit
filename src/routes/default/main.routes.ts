import { Request, Response, Router } from 'express';
import path from 'path';
/* TYPES */
import { RouterFunction } from '@routes/api/interfaces/index.interfaces';
import Error from '@html/Error.NOT_FOUND'
import Config from '@config/index.config';
/* TYPES ENDS */




const Defaults: RouterFunction = (router: Router) => {
    router.use('/defaults/health/check', async (req: Request, res: Response) => {
        console.log(process.env);
        res.status(200).json({
            status: 'OK',
            message: 'Server is running',
            currentTime: new Date().toISOString(),
            serverDown: false,
            frontEndUrl: Config?.FRONTEND_URL,
            backEndUrl: Config?.BACKEND_URL
        })
    })
    /**
     * This function returns the generic 404 page for the application
     * sdfkjsldfkj
     * @group Errors - Not Found Errors
     * @route GET /*
     * @route POST /*
     * @route PUT /*
     * @route PATCH /*
     * @route DELETE /*
     * @produces text/html
     * @consumes application/json application/xml
     * @returns {object} 404 - Generic 404 Error
     */
    router.use('*', async (req: Request, res: Response) => {
        res.status(404).send(Error);
    })
}

export default Defaults;
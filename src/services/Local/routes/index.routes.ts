import { RouterFunction, SessionedRequest } from "@interfaces/express.middlewares";
import { IRouter, Request, Response, Router } from "express";

import multer from "multer";
import {
    GET_FILES_DIR,
    GET_READ_FILE,
    POST_UPLOAD_FILES_LOCAL,
    PUT_MOVE_FILE,
    DELETE_REMOVE_FILE,
    GET_TEST_AUTHORIZATION,
    GET_DOWNLOAD_FILE,
    PUT_RENAME_FILE,
    DELETE_REMOVE_FOLDER,
    POST_CREATE_FOLDER,
    HEALTH_CHECK
} from "@services/Local/controllers/index.controller";
import config from "@constants/company.data";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./files/${config?.COMPANY}/TMP`);
    },
    filename: function (req, file, cb) {
        file.originalname = Buffer.from(file.originalname, 'latin1').toString(
            'utf8',
        );
        const extension = file.originalname.split('.').pop();
        const filename = file.originalname.split("." + extension)[0] + "-" + Date.now().toString() + "." + extension;
        cb(null, filename);
    }
});

const upload = multer({
    storage: storage
});

const LocalRouterFn: RouterFunction = (router) => {

    /**
     * MOVE FILES
     */

    router.put("/local/files/move/:key", PUT_MOVE_FILE);

    /*
    * RENAME FILE
    */

    router.put("/local/files/rename/:key", PUT_RENAME_FILE);
    /**
     * READ FILES UNDER FOLDERS
     */
    router.get("/local/folder/files/:key", GET_FILES_DIR)

    /**
     * READ FILE
     */

    router.get("/local/files/:key", GET_READ_FILE);

    /**
     * DOWNLOAD FILE
     */

    router.get("/local/download/:key", GET_DOWNLOAD_FILE);

    /**
     * UPLOAD FILES
     */

    router.post("/local/files", upload.array("files", 20), POST_UPLOAD_FILES_LOCAL);



    router.delete("/local/files/:key", DELETE_REMOVE_FILE);
    router.get("/local/authorize/test", GET_TEST_AUTHORIZATION)
    router.post("/local/folders", POST_CREATE_FOLDER);
    router.delete("/local/folders/:key", DELETE_REMOVE_FOLDER);
    /* Health Check */
    router.get("/health/check", HEALTH_CHECK);
    router.post("/health/check", HEALTH_CHECK);
}

export default LocalRouterFn;
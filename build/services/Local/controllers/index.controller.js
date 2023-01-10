"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HEALTH_CHECK = exports.DELETE_REMOVE_FOLDER = exports.POST_CREATE_FOLDER = exports.GET_DOWNLOAD_FILE = exports.GET_TEST_AUTHORIZATION = exports.POST_UPLOAD_FILES_LOCAL = exports.DELETE_REMOVE_FILE = exports.PUT_RENAME_FILE = exports.PUT_MOVE_FILE = exports.GET_READ_FILE = exports.GET_FILES_DIR = void 0;
const path_1 = __importDefault(require("path"));
const dir_to_json_1 = __importDefault(require("dir-to-json"));
const fs_1 = __importDefault(require("fs"));
const mime_types_1 = __importDefault(require("mime-types"));
const index_errors_1 = __importDefault(require("../../../error/api-errors/index.errors"));
const index_successes_1 = __importDefault(require("../../../error/api-successes/index.successes"));
const ApiError_1 = __importDefault(require("../../../error/ApiError"));
const company_data_1 = __importDefault(require("../../../constants/company.data"));
const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0)
        return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
const GET_FILES_DIR = async (req, res) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    const { key } = req.params;
    let response;
    try {
        response = await req.jetlexaApi.get(`/cdn/folders/${key}`);
    }
    catch (error) {
        throw new ApiError_1.default(index_errors_1.default.FOLDER_NOT_FOUND);
    }
    const filesDir = path_1.default.resolve((_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.folder) === null || _c === void 0 ? void 0 : _c.folderPath);
    try {
        const files = await (0, dir_to_json_1.default)(filesDir);
        res.status(index_successes_1.default.READ_FILES_UNDER_FOLDER.status).json({
            response: index_successes_1.default.READ_FILES_UNDER_FOLDER,
            node: Object.assign(Object.assign({}, files), { "path": (_f = (_e = (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.node) === null || _e === void 0 ? void 0 : _e.folder) === null || _f === void 0 ? void 0 : _f.folderPath, "name": (_j = (_h = (_g = response === null || response === void 0 ? void 0 : response.data) === null || _g === void 0 ? void 0 : _g.node) === null || _h === void 0 ? void 0 : _h.folder) === null || _j === void 0 ? void 0 : _j.foldername, "type": "directory", "children": (files === null || files === void 0 ? void 0 : files.children) || [] })
        });
    }
    catch (error) {
        res.status(index_successes_1.default.READ_FILES_UNDER_FOLDER.status).json({
            response: index_successes_1.default.READ_FILES_UNDER_FOLDER,
            node: {
                "path": (_m = (_l = (_k = response === null || response === void 0 ? void 0 : response.data) === null || _k === void 0 ? void 0 : _k.node) === null || _l === void 0 ? void 0 : _l.folder) === null || _m === void 0 ? void 0 : _m.folderPath,
                "name": (_q = (_p = (_o = response === null || response === void 0 ? void 0 : response.data) === null || _o === void 0 ? void 0 : _o.node) === null || _p === void 0 ? void 0 : _p.folder) === null || _q === void 0 ? void 0 : _q.foldername,
                "type": "directory",
                "children": []
            }
        });
    }
};
exports.GET_FILES_DIR = GET_FILES_DIR;
const GET_READ_FILE = async (req, res) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const { key } = req.params;
    try {
        const response = await (req === null || req === void 0 ? void 0 : req.jetlexaApi.get(`/cdn/files/${key}`));
        const filePath = path_1.default.resolve((_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.file) === null || _c === void 0 ? void 0 : _c.filePath);
        if (fs_1.default.existsSync(filePath)) {
            const fileType = path_1.default.extname(filePath);
            const mimeType = mime_types_1.default.lookup(fileType);
            console.log(mimeType);
            if (mimeType) {
                console.log(fileType);
                res.setHeader("Content-Type", mimeType);
                res.setHeader("Content-Disposition", `filename=${(_f = (_e = (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.node) === null || _e === void 0 ? void 0 : _e.file) === null || _f === void 0 ? void 0 : _f.filename}`);
                res.setHeader("filename", `${(_j = (_h = (_g = response === null || response === void 0 ? void 0 : response.data) === null || _g === void 0 ? void 0 : _g.node) === null || _h === void 0 ? void 0 : _h.file) === null || _j === void 0 ? void 0 : _j.filename}`);
                const file = fs_1.default.readFileSync(filePath);
                res.status(index_successes_1.default.FILE_DOWNLOADED.status).send(file);
            }
            else {
                res.status(index_successes_1.default.FILE_DOWNLOADED.status).sendFile(filePath);
            }
        }
        else {
            throw new ApiError_1.default(index_errors_1.default.FILE_NOT_FOUND);
        }
    }
    catch (error) {
        console.log("ERROR::", error);
        throw new ApiError_1.default(index_errors_1.default.FILE_NOT_FOUND);
    }
};
exports.GET_READ_FILE = GET_READ_FILE;
const PUT_MOVE_FILE = async (req, res) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    const { key } = req.params;
    const { newFolderKey } = req.body;
    try {
        const fileResponse = await req.jetlexaApi.get(`/cdn/files/${key}`);
        const newFolderResponse = await req.jetlexaApi.get(`/cdn/folders/${newFolderKey}`);
        const filePath = path_1.default.resolve((_c = (_b = (_a = fileResponse === null || fileResponse === void 0 ? void 0 : fileResponse.data) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.file) === null || _c === void 0 ? void 0 : _c.filePath);
        const newFolderPath = path_1.default.resolve((_f = (_e = (_d = newFolderResponse === null || newFolderResponse === void 0 ? void 0 : newFolderResponse.data) === null || _d === void 0 ? void 0 : _d.node) === null || _e === void 0 ? void 0 : _e.folder) === null || _f === void 0 ? void 0 : _f.folderPath);
        const newFilePath = path_1.default.resolve(path_1.default.join((_j = (_h = (_g = newFolderResponse === null || newFolderResponse === void 0 ? void 0 : newFolderResponse.data) === null || _g === void 0 ? void 0 : _g.node) === null || _h === void 0 ? void 0 : _h.folder) === null || _j === void 0 ? void 0 : _j.folderPath, (_m = (_l = (_k = fileResponse === null || fileResponse === void 0 ? void 0 : fileResponse.data) === null || _k === void 0 ? void 0 : _k.node) === null || _l === void 0 ? void 0 : _l.file) === null || _m === void 0 ? void 0 : _m.filename));
        if (!fs_1.default.existsSync(filePath)) {
            throw new ApiError_1.default(index_errors_1.default.FILE_NOT_FOUND);
        }
        if (!fs_1.default.existsSync(newFolderPath)) {
            fs_1.default.mkdirSync(newFolderPath);
        }
        fs_1.default.renameSync(filePath, newFilePath);
        const dirname = path_1.default.join(__dirname, '../../../../', 'files', company_data_1.default === null || company_data_1.default === void 0 ? void 0 : company_data_1.default.COMPANY).toString();
        const updateCDNFile = await req.jetlexaApi.put(`/cdn/files/${(_q = (_p = (_o = fileResponse === null || fileResponse === void 0 ? void 0 : fileResponse.data) === null || _o === void 0 ? void 0 : _o.node) === null || _p === void 0 ? void 0 : _p.file) === null || _q === void 0 ? void 0 : _q.key}`, {
            file: {
                filePath: newFilePath,
                folder: (_t = (_s = (_r = newFolderResponse === null || newFolderResponse === void 0 ? void 0 : newFolderResponse.data) === null || _r === void 0 ? void 0 : _r.node) === null || _s === void 0 ? void 0 : _s.folder) === null || _t === void 0 ? void 0 : _t.key,
            }
        });
        res.status(index_successes_1.default.FILE_MOVED.status).json({
            response: index_successes_1.default.FILE_MOVED,
            node: {
                __dirname: dirname,
                oldFilePath: filePath,
                newFilePath: newFilePath,
                newFolderPath: newFolderPath,
                updatedFile: Object.assign({}, (_u = updateCDNFile.data.node) === null || _u === void 0 ? void 0 : _u.file)
            }
        });
    }
    catch (error) {
        throw new ApiError_1.default(index_errors_1.default.FILE_NOT_FOUND);
    }
};
exports.PUT_MOVE_FILE = PUT_MOVE_FILE;
const PUT_RENAME_FILE = async (req, res) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const { key } = req.params;
    let { filename } = req.body;
    try {
        const fileResponse = await req.jetlexaApi.get(`/cdn/files/${key}`);
        const filePath = path_1.default.resolve((_c = (_b = (_a = fileResponse === null || fileResponse === void 0 ? void 0 : fileResponse.data) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.file) === null || _c === void 0 ? void 0 : _c.filePath);
        const extension = path_1.default.extname(filePath);
        if (!filename.endsWith(extension)) {
            filename = filename + extension;
        }
        const newFilePath = path_1.default.resolve(filePath.replace((_f = (_e = (_d = fileResponse === null || fileResponse === void 0 ? void 0 : fileResponse.data) === null || _d === void 0 ? void 0 : _d.node) === null || _e === void 0 ? void 0 : _e.file) === null || _f === void 0 ? void 0 : _f.filename, filename));
        console.log("NEW_FILE_PATH::", newFilePath);
        if (!fs_1.default.existsSync(filePath)) {
            throw new ApiError_1.default(index_errors_1.default.FILE_NOT_FOUND);
        }
        fs_1.default.renameSync(filePath, newFilePath);
        const dirname = path_1.default.join(__dirname, '../../../../', 'files', company_data_1.default === null || company_data_1.default === void 0 ? void 0 : company_data_1.default.COMPANY).toString();
        const updateCDNFile = await req.jetlexaApi.put(`/cdn/files/${(_j = (_h = (_g = fileResponse === null || fileResponse === void 0 ? void 0 : fileResponse.data) === null || _g === void 0 ? void 0 : _g.node) === null || _h === void 0 ? void 0 : _h.file) === null || _j === void 0 ? void 0 : _j.key}`, {
            file: {
                filePath: newFilePath,
                filename: filename
            }
        });
        res.status(index_successes_1.default.FILE_RENAMED.status).json({
            response: index_successes_1.default.FILE_RENAMED,
            node: {
                __dirname: dirname,
                oldFilePath: filePath,
                newFilePath: newFilePath,
                updatedFile: Object.assign({}, (_k = updateCDNFile.data.node) === null || _k === void 0 ? void 0 : _k.file)
            }
        });
    }
    catch (error) {
        throw new ApiError_1.default(index_errors_1.default.FILE_NOT_FOUND);
    }
};
exports.PUT_RENAME_FILE = PUT_RENAME_FILE;
const DELETE_REMOVE_FILE = async (req, res) => {
    var _a, _b, _c;
    const { key } = req.params;
    const fileResponse = await req.jetlexaApi.get(`/cdn/files/${key}`);
    const file = (_b = (_a = fileResponse === null || fileResponse === void 0 ? void 0 : fileResponse.data) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.file;
    const filePath = path_1.default.resolve(file === null || file === void 0 ? void 0 : file.filePath);
    if (!fs_1.default.existsSync(filePath)) {
        throw new ApiError_1.default(index_errors_1.default.FILE_NOT_FOUND);
    }
    fs_1.default.unlinkSync(filePath);
    const deletedFileResponse = await req.jetlexaApi.delete(`/cdn/files/${key}`);
    const dirname = path_1.default.join(__dirname, '../../../../', 'files', company_data_1.default === null || company_data_1.default === void 0 ? void 0 : company_data_1.default.COMPANY).toString();
    res.status(index_successes_1.default.FILE_MOVED.status).json({
        response: index_successes_1.default.FILE_MOVED,
        node: {
            __dirname: dirname,
            removedFile: true,
            file: Object.assign({}, (_c = deletedFileResponse.data.node) === null || _c === void 0 ? void 0 : _c.file)
        }
    });
};
exports.DELETE_REMOVE_FILE = DELETE_REMOVE_FILE;
const POST_UPLOAD_FILES_LOCAL = async (req, res) => {
    var _a, _b, _c, _d;
    try {
        const files = req.files;
        let { contract } = req.body;
        console.log("DEFAULT_CONTRACT:::", contract);
        const filesArray = (files || []).map((file, index) => {
            console.log(index, ". FILE:::", file);
            return {
                filename: file === null || file === void 0 ? void 0 : file.filename,
                folderPath: path_1.default.resolve(path_1.default.join(__dirname, '../../../../', 'files', company_data_1.default === null || company_data_1.default === void 0 ? void 0 : company_data_1.default.COMPANY, 'TMP')),
                foldername: 'TMP',
                filePath: path_1.default.resolve(path_1.default.join(__dirname, '../../../../', file === null || file === void 0 ? void 0 : file.path)),
                fileSize: file === null || file === void 0 ? void 0 : file.size,
                formattedFileSize: formatBytes(file === null || file === void 0 ? void 0 : file.size),
                fileType: file === null || file === void 0 ? void 0 : file.mimetype
                /* CONTINUE HERE */
            };
        });
        let response = await req.jetlexaApi.post('/cdn/files', {
            files: filesArray
        });
        console.log("RESPONSE:", response === null || response === void 0 ? void 0 : response.data);
        const filesResponse = await req.jetlexaApi.post('/cdn/custom/files', {
            files: (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.files.map((file) => {
                return Object.assign({}, file);
            })
        });
        const promises = filesArray.map((file, index) => {
            return new Promise(async (resolve, reject) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
                const filePath = path_1.default.resolve(file === null || file === void 0 ? void 0 : file.filePath);
                const newFilePath = path_1.default.resolve(path_1.default.join(file === null || file === void 0 ? void 0 : file.folderPath, (_c = (_b = (_a = filesResponse === null || filesResponse === void 0 ? void 0 : filesResponse.data) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.files[index]) === null || _c === void 0 ? void 0 : _c.filename));
                console.log("FILE_PATH_AFTER_UPLOAD:::", filePath);
                console.log("NEW_FILE_PATH_AFTER_UPLOAD:::", newFilePath);
                if (file) {
                    if (!fs_1.default.existsSync(filePath)) {
                        throw new ApiError_1.default(index_errors_1.default.FILE_NOT_FOUND);
                    }
                    fs_1.default.renameSync(filePath, newFilePath);
                    const updateCDNFile = await req.jetlexaApi.put(`/cdn/files/${(_f = (_e = (_d = filesResponse === null || filesResponse === void 0 ? void 0 : filesResponse.data) === null || _d === void 0 ? void 0 : _d.node) === null || _e === void 0 ? void 0 : _e.files[index]) === null || _f === void 0 ? void 0 : _f.key}`, {
                        file: {
                            filePath: newFilePath,
                            filename: (_j = (_h = (_g = filesResponse === null || filesResponse === void 0 ? void 0 : filesResponse.data) === null || _g === void 0 ? void 0 : _g.node) === null || _h === void 0 ? void 0 : _h.files[index]) === null || _j === void 0 ? void 0 : _j.filename
                        }
                    });
                    if (contract) {
                        (_k = req === null || req === void 0 ? void 0 : req.jetlexaApi) === null || _k === void 0 ? void 0 : _k.put(`/cdn/files/contract/${(_o = (_m = (_l = filesResponse === null || filesResponse === void 0 ? void 0 : filesResponse.data) === null || _l === void 0 ? void 0 : _l.node) === null || _m === void 0 ? void 0 : _m.files[index]) === null || _o === void 0 ? void 0 : _o.uid}`, {
                            contract: contract
                        }).then((res) => {
                            console.log("DONE_ADDING_CONTRACT:::", true);
                        }).catch((error) => {
                            console.log("ERROR_ADDING_CONTRACT:::", error);
                        });
                    }
                    resolve(true);
                }
            });
        });
        Promise.all(promises).then((res) => { }).catch((error) => { });
        console.log("CREATE FILES:", filesResponse === null || filesResponse === void 0 ? void 0 : filesResponse.data);
        res.status(index_successes_1.default.FILES_CREATED.status).json({
            response: index_successes_1.default.FILES_CREATED,
            node: {
                files: (_d = (_c = filesResponse === null || filesResponse === void 0 ? void 0 : filesResponse.data) === null || _c === void 0 ? void 0 : _c.node) === null || _d === void 0 ? void 0 : _d.files
            }
        });
    }
    catch (error) {
        throw new ApiError_1.default(index_errors_1.default.FILES_NOT_UPLOADED);
    }
};
exports.POST_UPLOAD_FILES_LOCAL = POST_UPLOAD_FILES_LOCAL;
const GET_TEST_AUTHORIZATION = async (req, res) => {
    res.json(req.user);
};
exports.GET_TEST_AUTHORIZATION = GET_TEST_AUTHORIZATION;
const GET_DOWNLOAD_FILE = async (req, res) => {
    var _a, _b, _c;
    const { key } = req.params;
    try {
        const response = await (req === null || req === void 0 ? void 0 : req.jetlexaApi.get(`/cdn/files/${key}`));
        const filePath = path_1.default.resolve((_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.file) === null || _c === void 0 ? void 0 : _c.filePath);
        if (fs_1.default.existsSync(filePath)) {
            res.status(index_successes_1.default.FILE_DOWNLOADED.status).download(filePath);
        }
        else {
            throw new ApiError_1.default(index_errors_1.default.FILE_NOT_FOUND);
        }
    }
    catch (error) {
        console.log("ERROR::", error);
        throw new ApiError_1.default(index_errors_1.default.FILE_NOT_FOUND);
    }
};
exports.GET_DOWNLOAD_FILE = GET_DOWNLOAD_FILE;
const POST_CREATE_FOLDER = async (req, res) => {
    var _a;
    const { foldername } = req.body;
    const folderPath = path_1.default.resolve(path_1.default.join(__dirname, '../../../../', 'files', company_data_1.default === null || company_data_1.default === void 0 ? void 0 : company_data_1.default.COMPANY, foldername));
    if (!fs_1.default.existsSync(folderPath)) {
        let response = null;
        try {
            fs_1.default.mkdirSync(folderPath);
            response = await req.jetlexaApi.post('/cdn/folders', {
                folder: {
                    foldername: foldername,
                    folderPath: folderPath
                }
            });
            res.status(index_successes_1.default.FOLDER_CREATED.status).json({
                response: index_successes_1.default.FOLDER_CREATED,
                node: Object.assign({}, (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.node)
            });
        }
        catch (error) {
            console.log("CUSTOM_CDN_FOLDER_CREATE_ERROR_1", error);
            throw new ApiError_1.default(index_errors_1.default.CREATE_FOLDER_ERROR);
        }
    }
    else {
        console.log("CUSTOM_CDN_FOLDER_CREATE_ERROR_2");
        throw new ApiError_1.default(index_errors_1.default.CREATE_FOLDER_ERROR);
    }
};
exports.POST_CREATE_FOLDER = POST_CREATE_FOLDER;
const DELETE_REMOVE_FOLDER = async (req, res) => {
    var _a, _b, _c, _d;
    const { key } = req.params;
    console.log("DELETING_LOCAL_FOLDER:::", key);
    let folderInfo;
    try {
        folderInfo = await req.jetlexaApi.get(`/cdn/folders/${key}`);
    }
    catch (error) {
        throw new ApiError_1.default(index_errors_1.default.FOLDER_NOT_FOUND);
    }
    console.log(folderInfo);
    const folderPath = path_1.default.resolve((_c = (_b = (_a = folderInfo === null || folderInfo === void 0 ? void 0 : folderInfo.data) === null || _a === void 0 ? void 0 : _a.node) === null || _b === void 0 ? void 0 : _b.folder) === null || _c === void 0 ? void 0 : _c.folderPath);
    let response;
    try {
        response = await req.jetlexaApi.delete(`/cdn/folders/${key}`);
    }
    catch (error) {
        throw new ApiError_1.default(index_errors_1.default.REMOVE_FOLDER_ERROR);
    }
    if (fs_1.default.existsSync(folderPath)) {
        fs_1.default.rmdirSync(folderPath);
    }
    res.status(index_successes_1.default.FOLDER_DELETED.status).json({
        response: index_successes_1.default.FOLDER_DELETED,
        node: Object.assign({}, (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.node)
    });
};
exports.DELETE_REMOVE_FOLDER = DELETE_REMOVE_FOLDER;
const HEALTH_CHECK = async (req, res) => {
    res.json({
        timestamp: Date.now(),
        serverUp: true
    });
};
exports.HEALTH_CHECK = HEALTH_CHECK;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9Mb2NhbC9jb250cm9sbGVycy9pbmRleC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLGdEQUF3QjtBQUN4Qiw4REFBb0M7QUFDcEMsNENBQW9CO0FBQ3BCLDREQUE4QjtBQUM5QixrRkFBMkQ7QUFDM0QsMkZBQW1FO0FBQ25FLCtEQUF1QztBQUV2QywyRUFBNkM7QUFHN0MsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFhLEVBQUUsV0FBbUIsQ0FBQyxFQUFFLEVBQUU7SUFDeEQsSUFBSSxLQUFLLEtBQUssQ0FBQztRQUFFLE9BQU8sU0FBUyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNmLE1BQU0sRUFBRSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLE1BQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV4RSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELE9BQU8sVUFBVSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3RSxDQUFDLENBQUM7QUFFSyxNQUFNLGFBQWEs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
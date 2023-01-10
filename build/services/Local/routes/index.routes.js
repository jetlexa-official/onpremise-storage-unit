"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const index_controller_1 = require("../controllers/index.controller");
const company_data_1 = __importDefault(require("../../../constants/company.data"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./files/${company_data_1.default === null || company_data_1.default === void 0 ? void 0 : company_data_1.default.COMPANY}/TMP`);
    },
    filename: function (req, file, cb) {
        file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
        const extension = file.originalname.split('.').pop();
        const filename = file.originalname.split("." + extension)[0] + "-" + Date.now().toString() + "." + extension;
        cb(null, filename);
    }
});
const upload = (0, multer_1.default)({
    storage: storage
});
const LocalRouterFn = (router) => {
    /**
     * MOVE FILES
     */
    router.put("/local/files/move/:key", index_controller_1.PUT_MOVE_FILE);
    /*
    * RENAME FILE
    */
    router.put("/local/files/rename/:key", index_controller_1.PUT_RENAME_FILE);
    /**
     * READ FILES UNDER FOLDERS
     */
    router.get("/local/folder/files/:key", index_controller_1.GET_FILES_DIR);
    /**
     * READ FILE
     */
    router.get("/local/files/:key", index_controller_1.GET_READ_FILE);
    /**
     * DOWNLOAD FILE
     */
    router.get("/local/download/:key", index_controller_1.GET_DOWNLOAD_FILE);
    /**
     * UPLOAD FILES
     */
    router.post("/local/files", upload.array("files", 20), index_controller_1.POST_UPLOAD_FILES_LOCAL);
    router.delete("/local/files/:key", index_controller_1.DELETE_REMOVE_FILE);
    router.get("/local/authorize/test", index_controller_1.GET_TEST_AUTHORIZATION);
    router.post("/local/folders", index_controller_1.POST_CREATE_FOLDER);
    router.delete("/local/folders/:key", index_controller_1.DELETE_REMOVE_FOLDER);
    /* Health Check */
    router.get("/health/check", index_controller_1.HEALTH_CHECK);
    router.post("/health/check", index_controller_1.HEALTH_CHECK);
};
exports.default = LocalRouterFn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NlcnZpY2VzL0xvY2FsL3JvdXRlcy9pbmRleC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxvREFBNEI7QUFDNUIsbUZBWXNEO0FBQ3RELDJFQUE2QztBQUU3QyxNQUFNLE9BQU8sR0FBRyxnQkFBTSxDQUFDLFdBQVcsQ0FBQztJQUMvQixXQUFXLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDaEMsRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXLHNCQUFNLGFBQU4sc0JBQU0sdUJBQU4sc0JBQU0sQ0FBRSxPQUFPLE1BQU0sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxRQUFRLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUNqRSxNQUFNLENBQ1QsQ0FBQztRQUNGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDN0csRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2QixDQUFDO0NBQ0osQ0FBQyxDQUFDO0FBRUgsTUFBTSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxFQUFDO0lBQ2xCLE9BQU8sRUFBRSxPQUFPO0NBQ25CLENBQUMsQ0FBQztBQUVILE1BQU0sYUFBYSxHQUFtQixDQUFDLE1BQU0sRUFBRSxFQUFFO0lBRTdDOztPQUVHO0lBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxnQ0FBYSxDQUFDLENBQUM7SUFFcEQ7O01BRUU7SUFFRixNQUFNLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLGtDQUFlLENBQUMsQ0FBQztJQUN4RDs7T0FFRztJQUNILE1BQU0sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsZ0NBQWEsQ0FBQyxDQUFBO0lBRXJEOztPQUVHO0lBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxnQ0FBYSxDQUFDLENBQUM7SUFFL0M7O09BRUc7SUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLG9DQUFpQixDQUFDLENBQUM7SUFFdEQ7O09BRUc7SUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSwwQ0FBdUIsQ0FBQyxDQUFDO0lBSWhGLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUscUNBQWtCLENBQUMsQ0FBQztJQUN2RCxNQUFNLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLHlDQUFzQixDQUFDLENBQUE7SUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxxQ0FBa0IsQ0FBQyxDQUFDO0lBQ2xELE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsdUNBQW9CLENBQUMsQ0FBQztJQUMzRCxrQkFBa0I7SUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsK0JBQVksQ0FBQyxDQUFDO0lBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLCtCQUFZLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUE7QUFFRCxrQkFBZSxhQUFhLENBQUMifQ==
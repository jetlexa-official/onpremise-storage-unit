"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Error_NOT_FOUND_1 = __importDefault(require("../../html/Error.NOT_FOUND"));
const index_config_1 = __importDefault(require("../../config/index.config"));
/* TYPES ENDS */
const Defaults = (router) => {
    router.use('/defaults/health/check', async (req, res) => {
        console.log(process.env);
        res.status(200).json({
            status: 'OK',
            message: 'Server is running',
            currentTime: new Date().toISOString(),
            serverDown: false,
            frontEndUrl: index_config_1.default === null || index_config_1.default === void 0 ? void 0 : index_config_1.default.FRONTEND_URL,
            backEndUrl: index_config_1.default === null || index_config_1.default === void 0 ? void 0 : index_config_1.default.BACKEND_URL
        });
    });
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
    router.use('*', async (req, res) => {
        res.status(404).send(Error_NOT_FOUND_1.default);
    });
};
exports.default = Defaults;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2RlZmF1bHQvbWFpbi5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSw0RUFBeUM7QUFDekMsd0VBQTBDO0FBQzFDLGdCQUFnQjtBQUtoQixNQUFNLFFBQVEsR0FBbUIsQ0FBQyxNQUFjLEVBQUUsRUFBRTtJQUNoRCxNQUFNLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7UUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakIsTUFBTSxFQUFFLElBQUk7WUFDWixPQUFPLEVBQUUsbUJBQW1CO1lBQzVCLFdBQVcsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRTtZQUNyQyxVQUFVLEVBQUUsS0FBSztZQUNqQixXQUFXLEVBQUUsc0JBQU0sYUFBTixzQkFBTSx1QkFBTixzQkFBTSxDQUFFLFlBQVk7WUFDakMsVUFBVSxFQUFFLHNCQUFNLGFBQU4sc0JBQU0sdUJBQU4sc0JBQU0sQ0FBRSxXQUFXO1NBQ2xDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0Y7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtRQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFFRCxrQkFBZSxRQUFRLENBQUMifQ==
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = __importDefault(require("./ApiError"));
/* Generic Error Handler For Express Application */
const GenericErrorHandler = (err, req, res, next) => {
    if (!(err instanceof ApiError_1.default)) {
        console.error(err);
    }
    if (/\w+ validation failed: \w+/i.test(err.message)) {
        err.message = err.message.replace(/\w+ validation failed: \w+/i, "");
    }
    res.status(err.status || 500).json({
        response: {
            status: err === null || err === void 0 ? void 0 : err.status,
            code: err === null || err === void 0 ? void 0 : err.code,
            message: err === null || err === void 0 ? void 0 : err.message,
        }
    });
};
exports.default = GenericErrorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VuZXJpY0Vycm9ySGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvci9HZW5lcmljRXJyb3JIYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0RBQXVDO0FBSXZDLG1EQUFtRDtBQUNuRCxNQUFNLG1CQUFtQixHQUFHLENBQUMsR0FBVyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQ3pGLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxrQkFBUSxDQUFDLEVBQUU7UUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN0QjtJQUNELElBQUksNkJBQTZCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNqRCxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLDZCQUE2QixFQUFFLEVBQUUsQ0FBQyxDQUFBO0tBQ3ZFO0lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMvQixRQUFRLEVBQUU7WUFDTixNQUFNLEVBQUUsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLE1BQU07WUFDbkIsSUFBSSxFQUFFLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxJQUFJO1lBQ2YsT0FBTyxFQUFFLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxPQUFPO1NBQ3hCO0tBQ0osQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBRUQsa0JBQWUsbUJBQW1CLENBQUMifQ==
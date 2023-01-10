"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRequest = void 0;
const api_jetlexa_1 = __importDefault(require("../../clients/api.jetlexa"));
const ApiError_1 = __importDefault(require("../../error/ApiError"));
const index_errors_1 = __importDefault(require("../../error/api-errors/index.errors"));
const authorizeRequest = async (req, res, next) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    try {
        if ((_a = req === null || req === void 0 ? void 0 : req.headers) === null || _a === void 0 ? void 0 : _a.authorization) {
            api_jetlexa_1.default.defaults.headers.common.Authorization = req.headers.authorization;
        }
        if ((_b = req.query) === null || _b === void 0 ? void 0 : _b.accessKey) {
            console.log("ACCESS_KEY:", (_c = req.query) === null || _c === void 0 ? void 0 : _c.accessKey);
            api_jetlexa_1.default.defaults.headers.common.Authorization = "Bearer " + ((_d = req.query) === null || _d === void 0 ? void 0 : _d.accessKey);
        }
        if (!((_e = req === null || req === void 0 ? void 0 : req.headers) === null || _e === void 0 ? void 0 : _e.authorization) && !((_f = req.query) === null || _f === void 0 ? void 0 : _f.accessKey)) {
            throw new Error("Authorization header not found");
        }
        const response = await api_jetlexa_1.default.post('/cdn/authorize', {}, {
            headers: {
                'Content-Type': 'application/json'
                //'Authorization': `${req.headers.authorization}`
            }
        });
        req.user = (_h = (_g = response === null || response === void 0 ? void 0 : response.data) === null || _g === void 0 ? void 0 : _g.node) === null || _h === void 0 ? void 0 : _h.user;
        req.jetlexaApi = api_jetlexa_1.default;
        next();
    }
    catch (error) {
        //next();
        throw new ApiError_1.default(index_errors_1.default.UNAUTHORIZED);
    }
};
exports.authorizeRequest = authorizeRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYXV0aG9yaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlcy9BdXRob3JpemF0aW9uL2luZGV4LmF1dGhvcml6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsdUVBQTJDO0FBQzNDLCtEQUF1QztBQUN2QyxrRkFBMkQ7QUFHcEQsTUFBTSxnQkFBZ0IsR0FBZ0MsS0FBSyxFQUFFLEdBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7O0lBQ3ZGLElBQUk7UUFDQSxJQUFJLE1BQUEsR0FBRyxhQUFILEdBQUcsdUJBQUgsR0FBRyxDQUFFLE9BQU8sMENBQUUsYUFBYSxFQUFFO1lBQzdCLHFCQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1NBQzdFO1FBQ0QsSUFBSSxNQUFBLEdBQUcsQ0FBQyxLQUFLLDBDQUFFLFNBQVMsRUFBRTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFBLEdBQUcsQ0FBQyxLQUFLLDBDQUFFLFNBQVMsQ0FBQyxDQUFBO1lBQ2hELHFCQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLFNBQVMsSUFBRyxNQUFBLEdBQUcsQ0FBQyxLQUFLLDBDQUFFLFNBQVMsQ0FBQSxDQUFDO1NBQ3BGO1FBRUQsSUFBSSxDQUFDLENBQUEsTUFBQSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsT0FBTywwQ0FBRSxhQUFhLENBQUEsSUFBSSxDQUFDLENBQUEsTUFBQSxHQUFHLENBQUMsS0FBSywwQ0FBRSxTQUFTLENBQUEsRUFBRTtZQUN2RCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDckQ7UUFFRCxNQUFNLFFBQVEsR0FBRyxNQUFNLHFCQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsRUFBRTtZQUN0RCxPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsaURBQWlEO2FBQ3BEO1NBQ0osQ0FBQyxDQUFDO1FBQ0gsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFBLE1BQUEsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLElBQUksMENBQUUsSUFBSSwwQ0FBRSxJQUFJLENBQUM7UUFDdEMsR0FBRyxDQUFDLFVBQVUsR0FBRyxxQkFBTyxDQUFDO1FBQ3pCLElBQUksRUFBRSxDQUFDO0tBQ1Y7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLFNBQVM7UUFDVCxNQUFNLElBQUksa0JBQVEsQ0FBQyxzQkFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ2xEO0FBQ0wsQ0FBQyxDQUFBO0FBM0JZLFFBQUEsZ0JBQWdCLG9CQTJCNUIifQ==
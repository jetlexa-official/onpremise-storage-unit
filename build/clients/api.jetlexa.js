"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const index_config_1 = __importDefault(require("../config/index.config"));
console.log("API URL: ", index_config_1.default === null || index_config_1.default === void 0 ? void 0 : index_config_1.default.API);
const jetlexaApiInstance = axios_1.default.create({
    baseURL: index_config_1.default.API
});
exports.default = jetlexaApiInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpldGxleGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2xpZW50cy9hcGkuamV0bGV4YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQix3RUFBMEM7QUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsc0JBQU0sYUFBTixzQkFBTSx1QkFBTixzQkFBTSxDQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRXRDLE1BQU0sa0JBQWtCLEdBQUcsZUFBSyxDQUFDLE1BQU0sQ0FBQztJQUNwQyxPQUFPLEVBQUUsc0JBQU0sQ0FBQyxHQUFHO0NBQ3RCLENBQUMsQ0FBQTtBQUVGLGtCQUFlLGtCQUFrQixDQUFDIn0=
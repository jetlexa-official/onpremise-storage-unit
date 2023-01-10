"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentBuilder = exports.CURRENT_ENVIRONMENT = exports.ENV_TYPES = void 0;
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_params_1 = __importDefault(require("../index.params"));
var ENV_TYPES;
(function (ENV_TYPES) {
    ENV_TYPES["DEVELOPMENT"] = "development";
    ENV_TYPES["PRODUCTION"] = "production";
    ENV_TYPES["STAGING"] = "staging";
})(ENV_TYPES = exports.ENV_TYPES || (exports.ENV_TYPES = {}));
const environmentDecider = () => {
    console.log(index_params_1.default);
    if (index_params_1.default.PRODUCTION) {
        return ENV_TYPES.PRODUCTION;
    }
    else if (index_params_1.default.STAGING) {
        return ENV_TYPES.STAGING;
    }
    else {
        return ENV_TYPES.DEVELOPMENT;
    }
};
exports.CURRENT_ENVIRONMENT = environmentDecider() || (ENV_TYPES === null || ENV_TYPES === void 0 ? void 0 : ENV_TYPES.PRODUCTION);
const EnvironmentBuilder = () => {
    const envPath = `../../../environments/.${exports.CURRENT_ENVIRONMENT}`;
    console.log(path_1.default.join(__dirname, envPath));
    return path_1.default.join(__dirname, envPath);
};
exports.EnvironmentBuilder = EnvironmentBuilder;
dotenv_1.default.config({ path: (0, exports.EnvironmentBuilder)() });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvbWV0aG9kcy9lbnZpcm9ubWVudC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdEQUF3QjtBQUN4QixvREFBNEI7QUFDNUIsd0VBQTRDO0FBRTVDLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNqQix3Q0FBMkIsQ0FBQTtJQUMzQixzQ0FBeUIsQ0FBQTtJQUN6QixnQ0FBbUIsQ0FBQTtBQUN2QixDQUFDLEVBSlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFJcEI7QUFFRCxNQUFNLGtCQUFrQixHQUFHLEdBQVcsRUFBRTtJQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFRLENBQUMsQ0FBQztJQUN0QixJQUFJLHNCQUFRLENBQUMsVUFBVSxFQUFFO1FBQ3JCLE9BQU8sU0FBUyxDQUFDLFVBQVUsQ0FBQztLQUMvQjtTQUFNLElBQUksc0JBQVEsQ0FBQyxPQUFPLEVBQUU7UUFDekIsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFDO0tBQzVCO1NBQU07UUFDSCxPQUFPLFNBQVMsQ0FBQyxXQUFXLENBQUM7S0FDaEM7QUFDTCxDQUFDLENBQUE7QUFFWSxRQUFBLG1CQUFtQixHQUFHLGtCQUFrQixFQUFFLEtBQUksU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLFVBQVUsQ0FBQSxDQUFDO0FBRTFFLE1BQU0sa0JBQWtCLEdBQUcsR0FBVyxFQUFFO0lBQzNDLE1BQU0sT0FBTyxHQUFXLDBCQUEwQiwyQkFBbUIsRUFBRSxDQUFDO0lBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUMxQyxPQUFPLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQTtBQUpZLFFBQUEsa0JBQWtCLHNCQUk5QjtBQUVELGdCQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUEsMEJBQWtCLEdBQUUsRUFBRSxDQUFDLENBQUMifQ==
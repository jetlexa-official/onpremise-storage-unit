"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const favicon_1 = __importDefault(require("favicon"));
/* EXPRESS APP DONT KILL PROCESS ON ERROR */
require("express-async-errors");
/* API ROUTER FROM ROUTES FOLDER */
const index_routes_1 = __importDefault(require("./routes/api/index.routes"));
/* DEFAULT ROUTER */
const index_routes_2 = __importDefault(require("./routes/default/index.routes"));
/* GLOBAL CONFIGURATION FILE */
const index_config_1 = __importDefault(require("./config/index.config"));
/* SWAGGER_GENERATOR */
//import SwaggerDocsCreator from "./middlewares/Swagger/index.swagger";
/* Generic Error Handler */
const GenericErrorHandler_1 = __importDefault(require("./error/GenericErrorHandler"));
const index_authorization_1 = require("./middlewares/Authorization/index.authorization");
/* EXPRESS APP INITIALIZER */
const app = (0, express_1.default)();
/* FAVICON SET FOR THE REQUESTS */
(0, favicon_1.default)((index_config_1.default === null || index_config_1.default === void 0 ? void 0 : index_config_1.default.BACKEND_URL) + "/favicon.ico", (err) => {
    if (err) {
        console.log(err);
    }
});
/* CORS */
app.use((0, cors_1.default)());
/* MORGAN LOGGER */
app.use((0, morgan_1.default)(index_config_1.default === null || index_config_1.default === void 0 ? void 0 : index_config_1.default.LOGGER));
/* HELMET SECURITY HEADERS */
app.use((0, helmet_1.default)());
/* EXPRESS BODY PARSER */
app.use(express_1.default.json());
/* EXPRESS URL ENCODED PARSER */
app.use(express_1.default.urlencoded({
    extended: true,
    limit: '1gb'
}));
/* AUTHORIZATION MIDDLEWARE */
//app.use(passport.initialize())
app.use(index_authorization_1.authorizeRequest);
/* ROUTER */
/* PUBLIC FILES STATIC SERVING */
app.use(express_1.default.static(path_1.default.join(__dirname, './public')));
/* EXPRESS ROUTER FOR API */
app.use('/api', index_routes_1.default);
/* SWAGGER GENERATOR FUNCTION INVOKE */
if (index_config_1.default === null || index_config_1.default === void 0 ? void 0 : index_config_1.default.SWAGGER_ENABLED) {
    //SwaggerDocsCreator(app);
}
/* DEFAULT ROUTER */
app.use('/', index_routes_2.default);
/* PUBLIC */
/* Generic Error Handler */
app.use(GenericErrorHandler_1.default);
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE2RDtBQUM3RCxvREFBNEI7QUFDNUIsZ0RBQXdCO0FBQ3hCLG9EQUF1RDtBQUN2RCxnREFBd0I7QUFHeEIsc0RBQThCO0FBRTlCLDRDQUE0QztBQUM1QyxnQ0FBOEI7QUFFOUIsbUNBQW1DO0FBQ25DLDRFQUFpRDtBQUVqRCxvQkFBb0I7QUFDcEIsZ0ZBQXlEO0FBRXpELCtCQUErQjtBQUMvQix3RUFBMEM7QUFFMUMsdUJBQXVCO0FBQ3ZCLHNFQUFzRTtBQUV0RSwyQkFBMkI7QUFDM0IscUZBQTZEO0FBTzdELHdGQUFrRjtBQUlsRiw2QkFBNkI7QUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7QUFFdEIsa0NBQWtDO0FBQ2xDLElBQUEsaUJBQU8sRUFBQyxDQUFBLHNCQUFNLGFBQU4sc0JBQU0sdUJBQU4sc0JBQU0sQ0FBRSxXQUFXLElBQUcsY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDbEQsSUFBSSxHQUFHLEVBQUU7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVO0FBQ1YsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDLENBQUM7QUFFaEIsbUJBQW1CO0FBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxnQkFBTSxFQUFDLHNCQUFNLGFBQU4sc0JBQU0sdUJBQU4sc0JBQU0sQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBRWhDLDZCQUE2QjtBQUM3QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsZ0JBQU0sR0FBRSxDQUFDLENBQUM7QUFNbEIseUJBQXlCO0FBQ3pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXhCLGdDQUFnQztBQUNoQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxDQUFDO0lBQ3ZCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsS0FBSyxFQUFFLEtBQUs7Q0FDZixDQUFDLENBQUMsQ0FBQztBQUdKLDhCQUE4QjtBQUM5QixnQ0FBZ0M7QUFFaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxzQ0FBZ0IsQ0FBQyxDQUFDO0FBRTFCLFlBQVk7QUFDWixpQ0FBaUM7QUFDakMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFMUQsNEJBQTRCO0FBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHNCQUFTLENBQUMsQ0FBQztBQUUzQix1Q0FBdUM7QUFDdkMsSUFBSSxzQkFBTSxhQUFOLHNCQUFNLHVCQUFOLHNCQUFNLENBQUUsZUFBZSxFQUFFO0lBQ3pCLDBCQUEwQjtDQUM3QjtBQUVELG9CQUFvQjtBQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxzQkFBYSxDQUFDLENBQUM7QUFFNUIsWUFBWTtBQUVaLDJCQUEyQjtBQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLDZCQUFtQixDQUFDLENBQUM7QUFFN0Isa0JBQWUsR0FBRyxDQUFDIn0=
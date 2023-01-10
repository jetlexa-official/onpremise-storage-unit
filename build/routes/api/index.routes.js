"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/* SWAGGER */
require("./swagger-types/index.swagger");
/* Router Functions */
const index_routes_1 = __importDefault(require("../../services/Local/routes/index.routes"));
/* Router Functions ENDS */
const Routes = [
    index_routes_1.default
];
const ApiRouter = express_1.default.Router();
Routes.forEach((RouterFn) => {
    RouterFn(ApiRouter);
});
exports.default = ApiRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9hcGkvaW5kZXgucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQTBDO0FBSTFDLGFBQWE7QUFDYixtREFBaUQ7QUFFakQsc0JBQXNCO0FBRXRCLHVGQUFnRTtBQUVoRSwyQkFBMkI7QUFJM0IsTUFBTSxNQUFNLEdBQXdCO0lBQ2hDLHNCQUFhO0NBQ2hCLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBVyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtJQUN4QixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDLENBQUE7QUFFRixrQkFBZSxTQUFTLENBQUMifQ==
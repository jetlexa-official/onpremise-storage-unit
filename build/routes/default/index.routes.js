"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_routes_1 = __importDefault(require("./main.routes"));
/* TYPES ENDS */
const Routes = [
    main_routes_1.default
];
const DefaultRouter = express_1.default.Router();
Routes.forEach((RouterFn) => {
    RouterFn(DefaultRouter);
});
exports.default = DefaultRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZWZhdWx0L2luZGV4LnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUEwQztBQUMxQyw4RUFBK0M7QUFHL0MsZ0JBQWdCO0FBQ2hCLE1BQU0sTUFBTSxHQUF3QjtJQUNoQyxxQkFBSTtDQUNQLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBVyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRS9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtJQUN4QixRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDLENBQUE7QUFFRixrQkFBZSxhQUFhLENBQUMifQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Switcher = {
    PRODUCTION: process.argv[2] === "PRODUCTION",
    STAGING: process.argv[2] === "STAGING",
    DEVELOPMENT: process.argv[2] === "DEVELOPMENT"
};
exports.default = Switcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9pbmRleC5wYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFNLFFBQVEsR0FBaUI7SUFDM0IsVUFBVSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssWUFBWTtJQUM1QyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTO0lBQ3RDLFdBQVcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLGFBQWE7Q0FDakQsQ0FBQTtBQUNELGtCQUFlLFFBQVEsQ0FBQyJ9
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError extends Error {
    constructor({ message, status = 500, code }) {
        super(message);
        this.status = undefined; // Error Status Number
        this.code = undefined; // Error Code in String
        this.status = status;
        this.code = code;
        // Ensure the name of this error is the same as the class name
        this.name = this.constructor.name;
        // This clips the constructor invocation from the stack trace.
        // It's not absolutely essential, but it does make the stack trace a little nicer.
        //  @see Node.js reference (bottom)
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = ApiError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBpRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IvQXBpRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxNQUFNLFFBQVMsU0FBUSxLQUFLO0lBR3hCLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxHQUFHLEdBQUcsRUFBRSxJQUFJLEVBQWdCO1FBQ3JELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUhuQixXQUFNLEdBQXVCLFNBQVMsQ0FBQyxDQUFDLHNCQUFzQjtRQUM5RCxTQUFJLEdBQXVCLFNBQVMsQ0FBQyxDQUFDLHVCQUF1QjtRQUd6RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQiw4REFBOEQ7UUFDOUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNsQyw4REFBOEQ7UUFDOUQsa0ZBQWtGO1FBQ2xGLG1DQUFtQztRQUNuQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDO0NBQ0o7QUFHRCxrQkFBZSxRQUFRLENBQUMifQ==
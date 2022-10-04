/* This class is used to generate a Programmatic HTTP JSON Error */
type ApiErrorType = {
    message: string;
    status: number;
    code: string;
};

class ApiError extends Error {
    status: number | undefined = undefined; // Error Status Number
    code: string | undefined = undefined; // Error Code in String
    constructor({ message, status = 500, code }: ApiErrorType) {
        super(message);
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


export default ApiError;
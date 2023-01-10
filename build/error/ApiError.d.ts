type ApiErrorType = {
    message: string;
    status: number;
    code: string;
};
declare class ApiError extends Error {
    status: number | undefined;
    code: string | undefined;
    constructor({ message, status, code }: ApiErrorType);
}
export default ApiError;

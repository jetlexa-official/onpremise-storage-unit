declare module 'bcrypt' {
    export function hash(text: string, salt: number): string;
    export function compare(password: string, hashed: string): boolean;
}
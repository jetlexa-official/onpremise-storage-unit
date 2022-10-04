declare module 'favicon' {
    export default function favicon(url: string, callback: undefined | { (err: Error, url: string): void }): void;
}
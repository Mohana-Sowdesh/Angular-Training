export interface chatData {
    [key:string]: {[key:string]: {message: string, timestamp: string, isSent: boolean}[]}
}
import crypto from 'crypto';

export const ShortUidGenerator: { (): string } = () => {
    return [4, 2, 2, 2, 6] // or 8-4-4-4-12 in hex
        .map(group => crypto.randomBytes(group).toString('hex'))
        .join('-');
};

export const LongUidGenerator: { (): string } = () => {
    return [8, 4, 4, 4, 12] // or 8-4-4-4-12 in hex
        .map(group => crypto.randomBytes(group).toString('hex'))
        .join('-');
};


export const RandomNumberIDGenerator: { (length?: number): string } = (length = 10) => {
    return Math.random().toString().slice(2, 12);

};  

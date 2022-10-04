export const phoneNumberFormatter = (phoneNumber: string) => {
    const phoneNumberWithEmptySpaces: string[] = [];
    const emptyCharIndexes: number[] = [3, 6, 8];
    const phoneNumberWithNoEmptySpaces = phoneNumber.replace(/\s/ig, "");
    phoneNumberWithNoEmptySpaces.split("").forEach((char, index) => {
        if (emptyCharIndexes.includes(index)) {
            phoneNumberWithEmptySpaces.push(" ");
        }
        phoneNumberWithEmptySpaces.push(char);
    })
    return phoneNumberWithEmptySpaces.join("");
}

export const phoneRegExp: RegExp = /^\(?\d{3}\)?[- ]?(\d{3})[ ]?(\d{2})[ ]?(\d{2})$/
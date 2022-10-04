type StringToBooleanFunc = { (boolStr: string | undefined): boolean };

export const StringToBoolean: StringToBooleanFunc = (boolStr: string | undefined) => {
    if (boolStr === "true") {
        return true;
    } else {
        return false;
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneRegExp = exports.phoneNumberFormatter = void 0;
const phoneNumberFormatter = (phoneNumber) => {
    const phoneNumberWithEmptySpaces = [];
    const emptyCharIndexes = [3, 6, 8];
    const phoneNumberWithNoEmptySpaces = phoneNumber.replace(/\s/ig, "");
    phoneNumberWithNoEmptySpaces.split("").forEach((char, index) => {
        if (emptyCharIndexes.includes(index)) {
            phoneNumberWithEmptySpaces.push(" ");
        }
        phoneNumberWithEmptySpaces.push(char);
    });
    return phoneNumberWithEmptySpaces.join("");
};
exports.phoneNumberFormatter = phoneNumberFormatter;
exports.phoneRegExp = /^\(?\d{3}\)?[- ]?(\d{3})[ ]?(\d{2})[ ]?(\d{2})$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUudXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvRm9ybXMvcGhvbmUudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxvQkFBb0IsR0FBRyxDQUFDLFdBQW1CLEVBQUUsRUFBRTtJQUN4RCxNQUFNLDBCQUEwQixHQUFhLEVBQUUsQ0FBQztJQUNoRCxNQUFNLGdCQUFnQixHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QyxNQUFNLDRCQUE0QixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDM0QsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFBO0lBQ0YsT0FBTywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFBO0FBWFksUUFBQSxvQkFBb0Isd0JBV2hDO0FBRVksUUFBQSxXQUFXLEdBQVcsaURBQWlELENBQUEifQ==
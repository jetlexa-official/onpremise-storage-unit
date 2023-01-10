"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneNumberVerificationCodeGenerator = void 0;
const phoneNumberVerificationCodeGenerator = (length = 6) => {
    const chars = "0123456789";
    let result = "";
    for (let i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};
exports.phoneNumberVerificationCodeGenerator = phoneNumberVerificationCodeGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmVOdW1iZXIudWlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL1VpZC9waG9uZU51bWJlci51aWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxvQ0FBb0MsR0FBRyxDQUFDLFNBQWlCLENBQUMsRUFBRSxFQUFFO0lBQ3ZFLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQztJQUMzQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUM7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNGLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQTtBQUxZLFFBQUEsb0NBQW9DLHdDQUtoRCJ9
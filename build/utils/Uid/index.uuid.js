"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberIDGenerator = exports.LongUidGenerator = exports.ShortUidGenerator = void 0;
const crypto_1 = __importDefault(require("crypto"));
const ShortUidGenerator = () => {
    return [4, 2, 2, 2, 6] // or 8-4-4-4-12 in hex
        .map(group => crypto_1.default.randomBytes(group).toString('hex'))
        .join('-');
};
exports.ShortUidGenerator = ShortUidGenerator;
const LongUidGenerator = () => {
    return [8, 4, 4, 4, 12] // or 8-4-4-4-12 in hex
        .map(group => crypto_1.default.randomBytes(group).toString('hex'))
        .join('-');
};
exports.LongUidGenerator = LongUidGenerator;
const RandomNumberIDGenerator = (length = 10) => {
    return Math.random().toString().slice(2, 12);
};
exports.RandomNumberIDGenerator = RandomNumberIDGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudXVpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9VaWQvaW5kZXgudXVpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBNEI7QUFFckIsTUFBTSxpQkFBaUIsR0FBbUIsR0FBRyxFQUFFO0lBQ2xELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1NBQ3pDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBSlcsUUFBQSxpQkFBaUIscUJBSTVCO0FBRUssTUFBTSxnQkFBZ0IsR0FBbUIsR0FBRyxFQUFFO0lBQ2pELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsdUJBQXVCO1NBQzFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBSlcsUUFBQSxnQkFBZ0Isb0JBSTNCO0FBR0ssTUFBTSx1QkFBdUIsR0FBa0MsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLEVBQUU7SUFDbEYsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUVqRCxDQUFDLENBQUM7QUFIVyxRQUFBLHVCQUF1QiwyQkFHbEMifQ==
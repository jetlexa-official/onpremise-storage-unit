"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSortQuery = void 0;
const parseSortQuery = (sort) => {
    if (sort) {
        try {
            const sortObj = JSON.parse(decodeURIComponent(String(sort)));
            if (sortObj === null || sortObj === void 0 ? void 0 : sortObj.index) {
                sortObj._id = sortObj.index;
                delete sortObj.index;
            }
            return sortObj;
        }
        catch (err) {
            return {};
        }
    }
    else {
        return {};
    }
};
exports.parseSortQuery = parseSortQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VTb3J0UXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvUGFyc2UvcGFyc2VTb3J0UXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sTUFBTSxjQUFjLEdBQUcsQ0FBQyxJQUErQixFQUFPLEVBQUU7SUFDbkUsSUFBSSxJQUFJLEVBQUU7UUFDTixJQUFJO1lBQ0EsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLEtBQUssRUFBRTtnQkFDaEIsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUM1QixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDeEI7WUFDRCxPQUFPLE9BQU8sQ0FBQztTQUVsQjtRQUFDLE9BQU8sR0FBUSxFQUFFO1lBQ2YsT0FBTyxFQUFFLENBQUE7U0FDWjtLQUNKO1NBQU07UUFDSCxPQUFPLEVBQUUsQ0FBQTtLQUNaO0FBQ0wsQ0FBQyxDQUFBO0FBaEJZLFFBQUEsY0FBYyxrQkFnQjFCIn0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filenameWithPrefixGenerator = void 0;
const filenameWithPrefixGenerator = (data) => {
    const { count, companyTitle, filename } = data;
    const countStr = count.toString();
    const formattedCount = countStr;
    let result = `${companyTitle.slice(0, 3)}_${formattedCount}_${filename}`;
    return {
        prefix: `${companyTitle.slice(0, 3)}_${formattedCount}_`,
        filename: result,
        fileNo: count
    };
};
exports.filenameWithPrefixGenerator = filenameWithPrefixGenerator;
/* const filename = filenameWithPrefixGenerator({
    count: 12800,
    companyTitle: "Yemeksepeti",
    filename: "abc.pdf"
})

console.log(filename) */ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVByZWZpeEdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9VaWQvRmlsZVByZWZpeEdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLDJCQUEyQixHQUFHLENBQUMsSUFJM0MsRUFBRSxFQUFFO0lBQ0QsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQy9DLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQyxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUM7SUFDaEMsSUFBSSxNQUFNLEdBQVcsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxjQUFjLElBQUksUUFBUSxFQUFFLENBQUM7SUFDakYsT0FBTztRQUNILE1BQU0sRUFBRSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLGNBQWMsR0FBRztRQUN4RCxRQUFRLEVBQUUsTUFBTTtRQUNoQixNQUFNLEVBQUUsS0FBSztLQUNoQixDQUFBO0FBQ0wsQ0FBQyxDQUFBO0FBZFksUUFBQSwyQkFBMkIsK0JBY3ZDO0FBR0Q7Ozs7Ozt3QkFNd0IifQ==
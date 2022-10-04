export const filenameWithPrefixGenerator = (data: {
    count: number,
    companyTitle: string,
    filename: string
}) => {
    const { count, companyTitle, filename } = data;
    const countStr = count.toString();
    const formattedCount = countStr;
    let result: string = `${companyTitle.slice(0, 3)}_${formattedCount}_${filename}`;
    return {
        prefix: `${companyTitle.slice(0, 3)}_${formattedCount}_`,
        filename: result,
        fileNo: count
    }
}


/* const filename = filenameWithPrefixGenerator({
    count: 12800,
    companyTitle: "Yemeksepeti",
    filename: "abc.pdf"
})

console.log(filename) */
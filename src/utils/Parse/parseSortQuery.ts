export const parseSortQuery = (sort: string | null | undefined): any => {
    if (sort) {
        try {
            const sortObj = JSON.parse(decodeURIComponent(String(sort)));
            if (sortObj?.index) {
                sortObj._id = sortObj.index;
                delete sortObj.index;
            }
            return sortObj;

        } catch (err: any) {
            return {}
        }
    } else {
        return {}
    }
}
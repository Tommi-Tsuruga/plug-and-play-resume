/**
 * experiences.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */

// Get visible experience

export default (experiences, {text, sortBy, startDate, endDate,}) => {
    return experiences.filter((experience) => {
        const startDateMatch = typeof startDate !== 'number' || experience.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || experience.createdAt <= endDate;

        return startDateMatch && endDateMatch;

    }).sort((a, b) => {
        switch(sortBy){
            case 'title': return a.title < b.title ? 1 : -1;
            case 'company': return a.company < b.company ? 1 : -1;
            case 'start_date': return a.startDate < b.startDate ? 1 : -1;
            case 'end_date': return a.endDate < b.endDate ? 1 : -1;
        }
    });
};

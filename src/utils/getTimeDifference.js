export const handleFilterDate = (filterValue) => {

    const currentDate = new Date('December 31, 2022');

    const reviewTimestamp = filterValue?.timestamp;
    let dateArray = reviewTimestamp.split('-');
    let monthAbbreviation = dateArray[0];
    let year = dateArray[1];

    const reviewDate = new Date(Date.parse(monthAbbreviation + ' 01, ' + year));

    // console.log(reviewDate , currentDate);

    var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    var millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44; // An average month length
    var millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // An average year length

    var timeDifference = currentDate - reviewDate;

    if (timeDifference < 2 * millisecondsPerWeek) {
        return '1w';
    } else if (timeDifference < 3 * millisecondsPerWeek) {
        return '2w';
    } else if (timeDifference < 2 * millisecondsPerMonth) {
        return '1m';
    } else if (timeDifference < 4 * millisecondsPerMonth) {
        return '3m';
    } else if (timeDifference < 7 * millisecondsPerMonth) {
        return '6m';
    } else if (timeDifference < 2 * millisecondsPerYear) {
        return '1y';
    } else {
        return '1y+';
    }

};
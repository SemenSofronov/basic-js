module.exports = function getSeason(date) {
    if (date === null) return 'Unable to determine the time of year!';
    if (date instanceof Date) {
        try {
            date.getTime()
        } catch (e) {
            throw new Error();
        }
        let month = date.getMonth();
        if (month === 0 || month === 1 || month === 11) return "winter";
        if (month === 2 || month === 3 || month === 4) return "spring";
        if (month === 5 || month === 6 || month === 7) return "summer";
        if (month === 8 || month === 9 || month === 10) return "autumn";
    } else {
        if (date !== undefined) throw new Error();
        return 'Unable to determine the time of year!';
    }
};

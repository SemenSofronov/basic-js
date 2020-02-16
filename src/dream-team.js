module.exports = function createDreamTeam(names) {
    if (names === undefined || names === null) return false;
    let result = [];
    for (let i = 0; i < names.length; i++) {
        if (typeof names[i] === "string") {
            result.push(names[i].trim().charAt(0).toUpperCase());
        }
    }
    if (result.length > 0) {
        let rString = "";
        result.sort();
        for (let i = 0; i < result.length; i++) {
            rString += result[i];
        }
        return rString;
    } else return false;
};
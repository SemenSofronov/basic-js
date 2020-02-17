module.exports = function repeater(str, options) {
    str = String(str);
    let addition = '';
    if (options.addition === null) {
        addition = 'null';
    } else if (options.addition !== undefined){
        addition = options.addition.toString();
    }
    if (typeof options.repeatTimes === "number") {
        let separator = typeof options.separator === "string" ? options.separator : '+';
        let additionSeparator = typeof options.additionSeparator === "string" ? options.additionSeparator : '|';
        let additionRepeatTimes = typeof options.additionRepeatTimes === "number" ? options.additionRepeatTimes : 0;
        let localResult = [];
        for (let i = 0; i < options.repeatTimes; i++) {
            let localAddition = [];
            for (let j = 0; j < additionRepeatTimes; j++) {
                localAddition.push(addition)
            }
            localResult.push(str + localAddition.join(additionSeparator));
        }
        return localResult.join(separator);
    }
    return str + addition;
};
  
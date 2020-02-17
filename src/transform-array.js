module.exports = function transform(arr) {
    if (!(arr instanceof Array)) throw  new Error();
    const seq = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (seq.includes(el)) {
            switch (seq.indexOf(el)) {
                case 0: {
                    ++i;
                    break;
                }
                case 1: {
                    result.pop();
                    break;
                }
                case 2: {
                    if (i + 1 > arr.length-1) break;
                    result.push(arr[i + 1]);
                    break;
                }
                case 3: {
                    if (i - 1 < 0) break;
                    result.push(arr[i - 1]);
                    break;
                }
            }
        } else {
            result.push(arr[i]);
        }
    }
    return result;
};

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let totalDepth = 1;
        for (let i = 0; i < arr.length; i++) {
            let localDepth = 1;
            if (arr[i] instanceof Array) {
                localDepth += this.calculateDepth(arr[i]);
                totalDepth = Math.max(totalDepth, localDepth);
            }
        }
        return totalDepth;
    }
};
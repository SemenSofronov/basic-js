const chainMaker = {
    chain: [],
    getLength() {
        this.chain.length;
    },
    addLink(value) {
        let temp = String(value);
        if (temp.includes("function (")) temp = temp.replace("function (", "function(");
        this.chain.push(String(temp));
        return this;
    },
    removeLink(position) {
        if (typeof position !== "number" || position - 1 < 0 || position - 1 > this.chain.length - 1) {
            this.chain = [];
            throw new Error();
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain = this.chain.reverse();
        return this;
    },
    finishChain() {
        let result = this.chain;
        for (let i = 0; i < result.length; i++) {
            result[i] = '( ' + result[i] + ' )';
        }
        this.chain = [];
        return result.join("~~");
    }
};

module.exports = chainMaker;

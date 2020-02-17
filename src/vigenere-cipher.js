class VigenereCipheringMachine {

    constructor(isDirect) {
        this.isDirect = isDirect !== false;
    }

    encrypt(string, key) {
        if (!string || !key) throw  new Error();

        key = this.filterKey(key);
        let result = this.crypt(string, key);

        if (!this.isDirect) {
            result = result.split('').reverse().join('');
        }

        return result;
    }

    decrypt(string, key) {
        if (!string || !key) throw  new Error();

        key = this.filterKey(key);

        for (let i = 0; i < key.length; i++)
            key[i] = (26 - key[i]) % 26;

        let result = this.crypt(string, key);

        if (!this.isDirect) {
            result = result.split('').reverse().join('');
        }

        return result;
    }

    crypt(input, key) {
        let output = "";
        for (let i = 0, j = 0; i < input.length; i++) {
            let c = input.charCodeAt(i);
            if (this.isUppercase(c)) {
                output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
                j++;
            } else if (this.isLowercase(c)) {
                output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
                j++;
            } else {
                output += input.charAt(i);
            }
        }
        return output.toUpperCase();
    }
    
    filterKey(key) {
        let result = [];
        for (let i = 0; i < key.length; i++) {
            let c = key.charCodeAt(i);
            if (this.isLetter(c))
                result.push((c - 65) % 32);
        }
        return result;
    }

     isLetter(c) {
        return this.isUppercase(c) || this.isLowercase(c);
    }

     isUppercase(c) {
        return 65 <= c && c <= 90; 
    }

     isLowercase(c) {
        return 97 <= c && c <= 122; 
    }

}

module.exports = VigenereCipheringMachine;

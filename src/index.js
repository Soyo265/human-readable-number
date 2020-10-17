module.exports = function toReadable (number) {
    const firstDigits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const secondDigitsBase = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];
    const exceptions = ['ten', 'eleven', 'twelve'];
    const digits = number.toString().split('');
    let result = [];
    for(let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === '0') {
            if (digits.length == 1) {
                result.push('zero');
                break;
            }
            continue;
        }

        if (i === digits.length - 1) {
            if (digits[i - 1] === '1') continue;

            result.push(firstDigits[+digits[i] - 1]);
        }

        if (i === digits.length - 2) {
            const exceptionNumber = +('' + digits[i] + digits[i + 1]);
            if (exceptionNumber >= 10 && exceptionNumber <= 12) {
                result.push(exceptions[exceptionNumber - 10]);
                continue;
            }

            if (digits[i] === '1') {
                if (digits[i + 1] === '4')
                    result.push('fourteen');
                else
                    result.push(secondDigitsBase[+digits[i + 1] - 2] + 'een');
                continue;
            }
            result.push(secondDigitsBase[+digits[i] - 2] + 'y');
        }

        if (i === digits.length - 3) {
            result.push(`${firstDigits[+digits[i] - 1]} hundred`)
        }
    }

    return result.reverse().join(' ');
}

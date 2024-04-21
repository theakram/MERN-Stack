function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

function isArmstrongNumber(number) {
    let originalNumber = number;
    let numDigits = String(number).length;
    let armstrongSum = 0;
    
    while (number > 0) {
        let digit = number % 10;
        armstrongSum += Math.pow(digit, numDigits);
        number = Math.floor(number / 10);
    }

    return armstrongSum === originalNumber;
}

function isPrimeNumber(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function findFactors(number) {
    let factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

let inputNumber = 153;

const sum = sumOfDigits(inputNumber);
const isArmstrong = isArmstrongNumber(inputNumber);
const isPrime = isPrimeNumber(inputNumber);
const factors = findFactors(inputNumber);

console.log(`Number: ${inputNumber}`);
console.log(`Sum of its digits: ${sum}`);
console.log(`Is it an Armstrong number? ${isArmstrong ? 'Yes' : 'No'}`);
console.log(`Is it a prime number? ${isPrime ? 'Yes' : 'No'}`);
console.log(`Factors: ${factors.join(', ')}`);

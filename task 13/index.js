const dummyArray = [4, 8, 2, 11, 6, 7, 10];

const findMax = (arr) => {
    return Math.max(...arr);
};

const calculateSum = function (arr) {
    return arr.reduce((acc, current) => acc + current, 0);
};

function countOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0).length;
}

console.log("Ex Array:", dummyArray);
console.log("Maximum number:", findMax(dummyArray));
console.log("Sum of all elements:", calculateSum(dummyArray));
console.log("Count of odd numbers:", countOddNumbers(dummyArray));

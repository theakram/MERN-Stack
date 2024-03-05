// //Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.
// {
// const originalArray = [1, 2, 3, 4, 5];
// const squaredArray = originalArray.map((num) => num ** 2);
// console.log(squaredArray);
// }

// //Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..
// {
//     function calculateGrade(score) {
//         return (
//           score >= 90 ? 'A' :
//           score >= 80 ? 'B' :
//           score >= 70 ? 'C' :
//           score >= 60 ? 'D' : 'F'
//         );
//       }

//       const studentScore = 65;
//       const studentGrade = calculateGrade(studentScore);

//       console.log(`Student Grade: ${studentGrade}`);

// }

// //Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.
// {
//     let car = {
//         companyName: "Tata",
//         model: "Tata22",
//         year: 2020
//       };

//       function changeCarYear(newYear) {
//         car = {...car, year: newYear};
//       }

//       changeCarYear(2024);

//       const { companyName, model, year } = car;
//       console.log(`CompanyName:${companyName},Car Model: ${model}, Year: ${year}`);

// }

// // Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.
// {
//     const numbers = [2, 3, 5, 7, 11, 12, 14, 13, 17, 19, 23];
//     const isPrime = (num) => {
//         for (let i = 2; i < num; i++)
//             if (num % i === 0) return false;
//         return num !== 1;
//     };

//     const primeNumbers = numbers.filter(isPrime);
//     console.log(primeNumbers);

// }

// // Q5 -  State different use cases of map, filter and reduce functions.

// Map:
// Transforming an array of strings to uppercase.
// Converting an array of temperatures from Celsius to Fahrenheit.
// Extracting specific properties from an array of objects.

// Filter:
// Filtering out even numbers from an array.
// Selecting only products with a price above a certain threshold.
// Removing null or undefined values from an array.

// Reduce:
// Calculating the sum of an array of numbers.
// Concatenating an array of strings into a single sentence.
// Finding the maximum value in an array.

// // Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

// {
//     async function fetchData() {
//         try {
//           const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//           const data = await response.json();
//           console.log(data);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       }

//       fetchData();

// }

// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.
{
    const person = {
        name: 'John Doe',
        address: {
            city: 'Example City',
            // contact property is missing intentionally
        }
    };

    const phoneNumber = person?.contact?.phone;

    console.log(`Phone Number: ${phoneNumber || 'Not available'}`);

}

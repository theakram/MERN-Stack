const divideWithPromise = (numerator, denominator) => {
  return new Promise((resolve, reject) => {
    if (denominator === 0) {
      reject(new Error("Division by zero is not allowed."));
    } else {
      const result = numerator / denominator;
      resolve(result);
    }
  });
};

// Testing the function with different cases
async function testDivision() {
  try {
    // Case 1: Valid division
    console.log("Example 1");
    console.log("Dividing 10 by 2...");
    const result1 = await divideWithPromise(10, 2);
    console.log("Result:", result1);
    
    // Case 2: Division by zero
    console.log("\nExample 2");
    console.log("Dividing 10 by 0...");
    const result2 = await divideWithPromise(10, 0);
    console.log("Result:", result2); 

    // Case 3: Another valid division
    console.log("\nExample 3");
    console.log("Dividing 20 by 4...");
    const result3 = await divideWithPromise(20, 4);
    console.log("Result:", result3);

    // Case 4: Division by zero again
    console.log("\nExample 4");
    console.log("Dividing 8 by 0...");
    const result4 = await divideWithPromise(8, 0);
    console.log("Result:", result4); 

    // Case 5: Valid division with decimal result
    console.log("\nExample 5");
    console.log("Dividing 15 by 7...");
    const result5 = await divideWithPromise(15, 7);
    console.log("Result:", result5);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Run the test
testDivision();

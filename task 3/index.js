// Question 1.

/*{function table(e){
    for(let i=1; i<=10; i++){
        document.writeln(i*e);
        console.log(i*e);
    }
}
table(2)
table(3)
table(4) }*/


// Question 2.

/* {
var = its declear and access any where any function.but not access in iife function.
let = its declear as a globaly to access any where any function but its declear in a function then its only access in that function.
const =its declear as name work as same as let but one time decleartion then not change the value.
} */


// Question 3.
/*{
function max(arr) {
  if (arr.length === 0) {
    console.log("Array is empty.");
    return;
  }

  let maximum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }

  console.log("Maximum element:", maximum);

  if (maximum % 2 === 0) {
    console.log("The maximum element is even.");
  } else {
    console.log("The maximum element is odd.");
  }

  return maximum;
}
const numbers = [3, 7, 2, 8, 5, 10, 6];
const result = max(numbers);
}*/


// Question 4.
/*{
    const Person = {
  Name: "The Akram",
  Age: 21,
  City: "Lucknow",
  greet: function() {
    const nameWords = this.Name.split(" ");
    const firstName = nameWords[0];
    console.log(`Hello ${firstName}`);
    document.writeln(`Hello ${firstName}`);
  }
};
Person.greet();
}*/


// Question 5.

let count = 1;

const intervalId = setInterval(() => {
  console.log(count);
  document.writeln(count);
  if (count === 10) {
    clearInterval(intervalId);
  } else {
    count++;
  }
}, 10000);


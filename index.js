// Exercise 1
alert("Exercise 1");
let nameFormat = /^[a-zA-Z]+$/;
let phoneFormat = /^[0-9]{8}$/;
let mobileFormat = /^(010|011|012)[0-9]{8}$/;
let emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let yourName;
let yourPhone;
let yourMobile;
let yourEmail;
let color;
do {
  yourName = prompt("Enter your name:");
  if (!nameFormat.test(yourName)) {
    alert("Invalid name it must contain only characters.");
  }
} while (!nameFormat.test(yourName));
do {
  yourPhone = prompt("Enter your phone number:");
  if (!phoneFormat.test(yourPhone)) {
    alert("Invalid phone number it must be an 8-digit number.");
  }
} while (!phoneFormat.test(yourPhone));
do {
  yourMobile = prompt("Enter your mobile number:");
  if (!mobileFormat.test(yourMobile)) {
    alert(
      "Invalid mobile number it must be 11 digits and start with 010, 011, or 012."
    );
  }
} while (!mobileFormat.test(yourMobile));
do {
  yourEmail = prompt("Enter your email:");
  if (!emailFormat.test(yourEmail)) {
    alert("Invalid email it must follow the format abc@123.com.");
  }
} while (!emailFormat.test(yourEmail));
do {
  color = prompt("Choose a color (red, green, blue):");
  if (!/^(red|green|blue)$/i.test(color)) {
    alert("Invalid color choose red, green, or blue.");
  }
} while (!/^(red|green|blue)$/i.test(color));
console.log(
  `%cWelcome dear guest %c${yourName}`,
  `color:${color}`,
  "color: black"
);
console.log(
  `%cYour Telephone number is %c${yourPhone}`,
  `color:${color}`,
  "color: black"
);
console.log(
  `%cYour Mobile number is %c${yourMobile}`,
  `color:${color}`,
  "color: black"
);
console.log(
  `%cYour email address is %c${yourEmail}`,
  `color:${color}`,
  "color: black"
);
let dateToday = new Date();
let day = dateToday.getDate();
let month = dateToday.getMonth() + 1;
console.log(`%ctoday is %c${day}`, `color:${color}`, "color: black");
console.log(`%cWe are in month %c${month}`, `color:${color}`, "color: black");
// Exercise 2
alert("Exercise 2");
function largestWord(str) {
  let words = str.split(" ");
  let largestWord = "";
  for (let word of words) {
    if (word.length > largestWord.length) {
      largestWord = word;
    }
  }
  return largestWord;
}
let str = prompt("Enter a String:");
console.log(largestWord(str));
// Exercise 3
alert("Exercise 3");
const sorted = () => {
  let inputArray = prompt("Enter 5 numerical values separated by commas:");
  let numbers = inputArray.split(",").map(Number);
  if (numbers.length !== 5) {
    return;
  }
  console.log(
    `%cu've  entered the values of  %c${inputArray} `,
    `color: ${color}`,
    `color: black`
  );
  console.log(
    `%cur values after being stored descending %c${numbers
      .sort((a, b) => b - a)
      .join(", ")}`,
    `color: ${color}`,
    `color: black`
  );
  console.log(
    `%cur values after stored ascending %c${numbers
      .sort((a, b) => a - b)
      .join(", ")}`,
    `color: ${color}`,
    `color: black`
  );
};

sorted();
// Exercise 4
alert("Exercise 4");
let radius = parseFloat(prompt("What is the value of your circles radius"));
if (!isNaN(radius) && radius > 0) {
  let area = Math.PI * Math.pow(radius, 2);
  alert(`Total area of the circle is: ${area}`);
} else {
  alert("Invalid");
}
let numberSquare = parseFloat(
  prompt("What is the value you want to calculate its square root")
);
if (!isNaN(numberSquare) && numberSquare >= 0) {
  let squareRoot = Math.sqrt(numberSquare);
  alert(`square root of ${numberSquare} is ${squareRoot}`);
} else {
  alert("Invalid");
}
let angle = parseFloat(prompt("Enter an angle:"));
if (!isNaN(angle)) {
  let cosAngle = Math.cos(angle * (Math.PI / 180));
  alert(`cos(${angle}\u00B0) is ${cosAngle.toFixed(2)}`);
} else {
  alert("Invalid");
}

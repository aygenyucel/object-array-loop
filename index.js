/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

const { ObjectFlags } = require("typescript");

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
console.log("\n---------------EXERCISE 1-----------------");

let arr = [1, 2, 3, 4, 5];

console.log("Arr:", arr);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
console.log("\n---------------EXERCISE 2-----------------");

let obj = {
  name: "Aygen",
  surname: "Yucel",
  email: "aygenyucel@outlook.com",
  age: "24",
};

console.log("obj:", obj);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
console.log("\n---------------EXERCISE 3-----------------");

obj["drivingLicense"] = false;
// obj.drivingLicense = false;
console.log("obj:", obj);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

console.log("\n---------------EXERCISE 4-----------------");

delete obj.age;

console.log("obj:", obj);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
console.log("\n---------------EXERCISE 5-----------------");

let objSec = {
  name: "Thomas",
  surname: "White",
  email: "thomaswhite@gmail.com",
};

let isEmailSame =
  obj.email === objSec.email
    ? "Yes, they are totally same!"
    : "No, they are not same!";

console.log("Is the email adress same with previous?", isEmailSame);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

console.log("\n---------------EXERCISE 6-----------------");

let totalShoppingCart = 100;

let totalCost =
  totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + 10;

console.log("The total cost the charge:", totalCost);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

console.log("\n---------------EXERCISE 7-----------------");

totalCost =
  totalShoppingCart > 50
    ? totalShoppingCart - (totalShoppingCart * 20) / 100
    : totalShoppingCart + 10;

console.log("The total cost the charge:", totalCost);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

console.log("\n---------------EXERCISE 8-----------------");

let objCar = {
  brand: "Lamborghini",
  model: "Reventon",
  licensePlate: "00T4V2",
};

let objCar1 = Object.assign({}, objCar, { licensePlate: "11T3V3" });
let objCar2 = Object.assign({}, objCar, { licensePlate: "22T3V3" });
let objCar3 = Object.assign({}, objCar, { licensePlate: "33T3V3" });
let objCar4 = Object.assign({}, objCar, { licensePlate: "44T3V3" });
let objCar5 = Object.assign({}, objCar, { licensePlate: "55T3V3" });

console.log("\nobjCar:", objCar);
console.log("\nobjCar1:", objCar1);
console.log("\nobjCar2:", objCar2);
console.log("\nobjCar3:", objCar3);
console.log("\nobjCar4:", objCar4);
console.log("\nobjCar5:", objCar5);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

console.log("\n---------------EXERCISE 9-----------------");

let carsForRent = [objCar, objCar1, objCar2, objCar3, objCar4, objCar5];

console.log("Array carsForRent:", carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("\n---------------EXERCISE 10-----------------");

carsForRent.shift();

console.log("(shift) carsForRent:", carsForRent);

carsForRent.pop();

console.log("(pop) carsForRent:", carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log("\n---------------EXERCISE 11-----------------");

console.log(
  "objCar type:",
  typeof objCar,
  "\nobjCar licensePlate type:",
  typeof objCar.licensePlate,
  "\nobjCar brand type:",
  typeof objCar.brand
);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

console.log("\n---------------EXERCISE 12-----------------");

let carsForSale = [];
console.log("carsForSale Array: ", carsForSale);

carsForSale.push(objCar1, objCar2, objCar3);

console.log("carsForSale Array after adding: ", carsForSale);

let totalCars = {
  carsForSale: carsForSale.length,
  carsForRent: carsForRent.length,
};

console.log("Total cars:", totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

console.log("\n---------------EXERCISE 13-----------------");

for (let i = 0; i <= carsForSale.length - 1; i++) {
  console.log(`Car ${i} for sale:`, carsForSale[i]);
}

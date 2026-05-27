// let items = [
//   { name: "Bread", price: 2.5 },
//   { name: "MIlk", price: 3 },
//   { name: "Eggs", price: 2 },
//   { name: "cheese", price: 4.5 },
//   { name: "Apple", price: 5 },
//   { name: "Chicken", price: 8 },
//   { name: "Rice", price: 3.5 },
//   { name: "Butter", price: 2.75 },
//   { name: "Juice", price: 3.25 },
// ];

// let total_cost = 0;
// for (let i = 0; i < items.length; i++) {
//   total_cost += items[i].price;
// }
// console.log(`Total Cost: $ ${total_cost}`);

// let discount_amount = total_cost * (10 / 100);
// console.log(`Discount Amount: $ ${discount_amount}`);

// let tax_amount = (total_cost - discount_amount) * (7 / 100);
// console.log(`Tax Amount: $ ${tax_amount}`);

// let final_cost = total_cost - discount_amount + tax_amount;
// console.log(`Final Cost: $ ${final_cost}`);

function calculateTotalCost() {
  let Bread = 2.5;
  let Milk = 3;
  let Eggs = 2;
  let Cheese = 4.5;
  let Apple = 5;
  let Chicken = 8;
  let Rice = 3.5;
  let Butter = 2.75;
  let Juice = 3.25;
  return Bread + Milk + Eggs + Cheese + Apple + Chicken + Rice + Butter + Juice;
}

console.log("Total Cost :" + calculateTotalCost().toFixed(2));

function calculateDiscountAmount(totalCost) {
  return totalCost * (10 / 100);
}

let totalCost = calculateTotalCost();
console.log("Discount Amount :" + calculateDiscountAmount(totalCost));

function calculateTaxAmount(calculateDiscountAmount) {
  return (totalCost - discountAmount) * (7 / 100);
}

let discountAmount = calculateDiscountAmount(totalCost);
console.log(
  "Tax Amount :" + calculateTaxAmount(calculateDiscountAmount).toFixed(2),
);

let taxAmount = calculateTaxAmount(calculateDiscountAmount);
let finalTotalCost = totalCost - discountAmount + taxAmount;
console.log("Final Total Cost :" + finalTotalCost.toFixed(2));

let items = [
  { name: "Bread", price: 2.5 },
  { name: "MIlk", price: 3 },
  { name: "Eggs", price: 2 },
  { name: "cheese", price: 4.5 },
  { name: "Apple", price: 5 },
  { name: "Chicken", price: 8 },
  { name: "Rice", price: 3.5 },
  { name: "Butter", price: 2.75 },
  { name: "Juice", price: 3.25 },
];

let total_cost = 0;
for (let i = 0; i < items.length; i++) {
  total_cost += items[i].price;
}
console.log(`Total Cost: $ ${total_cost}`);

let discount_amount = total_cost * (10 / 100);
console.log(`Discount Amount: $ ${discount_amount}`);

let tax_amount = (total_cost - discount_amount) * (7 / 100);
console.log(`Tax Amount: $ ${tax_amount}`);

let final_cost = total_cost - discount_amount + tax_amount;
console.log(`Final Cost: $ ${final_cost}`);

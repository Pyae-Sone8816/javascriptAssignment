let items = [
  { name: "Burger", price: 8.5 },
  { name: "Fries", price: 3.25 },
  { name: "Soda", price: 2.0 },
  { name: "Dessert", price: 5.75 },
];

let total_bill = 0;
for (let i = 0; i < items.length; i++) {
  total_bill += items[i].price;
}
console.log(`Total bill:$ ${total_bill}`);

const service_charge = 0.1;
const tax_rate = 0.07;

let service_chargeAmount = Math.ceil(total_bill * service_charge);
total_bill = total_bill + service_chargeAmount;
console.log(`Service Charge: $ ${service_chargeAmount}`);

let tax_amount = Math.ceil(total_bill * tax_rate);
total_bill = total_bill + tax_amount;
console.log(`Tax Amount: $ ${tax_amount}`);

console.log(`Total Bill :$ ${total_bill}`);
console.log(`Each Person Pay Amount:$ ${total_bill / 2}`);

function calculateTotalBill() {
  let Burger = 8.5;
  let Fries = 3.25;
  let Soda = 2.0;
  let Dessert = 5.75;

  return Burger + Fries + Soda + Dessert;
}

console.log("Total Bill:" + calculateTotalBill());

function calculateServiceCharge(totalBill) {
  return totalBill * 0.1;
}

let totalBill = calculateTotalBill();
console.log(
  "Service Charge Amount:" + calculateServiceCharge(totalBill).toFixed(2),
);

function calculateTax(totalWithService) {
  return totalWithService * 0.07;
}

let serviceCharge = calculateServiceCharge(totalBill);
let totalWithService = totalBill + serviceCharge;
console.log("Tax Amount:" + calculateTax(totalWithService).toFixed(2));

function splitBill(finalTotalBill, people) {
  return finalTotalBill / people;
}

let tax = calculateTax(totalWithService);
let finalTotalBill = totalWithService + tax;

console.log("Final Total Bill:", finalTotalBill.toFixed(2));

console.log("Each Person Pay:" + splitBill(finalTotalBill, 4).toFixed(2));

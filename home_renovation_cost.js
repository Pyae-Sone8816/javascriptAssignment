let living_room = 200;
let living_room_per_squareCost = 15;
const living_room_cost = living_room * living_room_per_squareCost;
console.log(`Living Room Cost:$ ${living_room_cost}`);

let kitchen = 150;
let kitchen_per_squareCost = 20;
const kitchen_cost = kitchen * kitchen_per_squareCost;
console.log(`Kitchen Cost:$ ${kitchen_cost}`);

let bathroom = 100;
let bathroom_per_squareCost = 25;
const bathroom_cost = bathroom * bathroom_per_squareCost;
console.log(`Bathroom Cost:$ ${bathroom_cost}`);

let total_cost = living_room_cost + kitchen_cost + bathroom_cost;
console.log(`Total Renovation Cost: $ ${total_cost}`);

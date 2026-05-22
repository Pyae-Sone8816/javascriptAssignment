const distance_to_travel = 300;
const fuel_efficiency = 25;
const cost_fuel_per_gallon = 3.75;

let needed_Fuel = Math.ceil(distance_to_travel / fuel_efficiency);
console.log(`Needed Fuel :$ ${needed_Fuel}`);

let total_cost = Math.ceil(needed_Fuel * cost_fuel_per_gallon);
console.log(`Total Cost Of The Trip:$ ${total_cost}`);

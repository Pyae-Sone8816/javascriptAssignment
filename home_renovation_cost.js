// let livingRoomCost = 0;
// function livingRoomCost() {
//   let living_room = 200;
//   let living_room_per_squareCost = 15;
//   livingRoomCostt = living_room * living_room_per_squareCost;
//   console.log(`Living Room Cost:$ ${livingRoomCost}`);
// }

// let kitchen_cost = 0;
// function kitchenRoomCost() {
//   let kitchen = 150;
//   let kitchen_per_squareCost = 20;
//   kitchen_cost = kitchen * kitchen_per_squareCost;
//   console.log(`Kitchen Cost:$ ${kitchen_cost}`);
// }

// let bathroom_cost = 0;
// function bathRoomCost() {
//   let bathroom = 100;
//   let bathroom_per_squareCost = 25;
//   bathroom_cost = bathroom * bathroom_per_squareCost;
//   console.log(`Bathroom Cost:$ ${bathroom_cost}`);
// }

// function totalCost() {
//   total_cost = livingRoomCostt + kitchen_cost + bathroom_cost;
//   console.log(`Total Renovation Cost: $ ${total_cost}`);
// }

// livingRoomCost();
// kitchenRoomCost();
// bathRoomCost();
// totalCost();

function livingRoomCost(livingRoom, lrpsc) {
  return (livingRoomCost = livingRoom * lrpsc);
}

function kitchenRoomCost(kitchenRoom, kpsc) {
  return (kitchenRoomCost = kitchenRoom * kpsc);
}

function bathRoomCost(bathRoom, bpsc) {
  return (bathRoomCost = bathRoom * bpsc);
}

function totalCost(livingRoom, kitchenRoom, bathRoom) {
  return (totalCost = livingRoom + kitchenRoom + bathRoom);
}

let livingRoom = livingRoomCost(200, 15);
console.log("Living Room Cost:", livingRoom);

let kitchenRoom = kitchenRoomCost(150, 20);
console.log("Kitchen Room Cost:", kitchenRoom);

let bathRoom = bathRoomCost(100, 25);
console.log("Bath Room Cost:", bathRoom);

let finalCost = totalCost(livingRoom, kitchenRoom, bathRoom);
console.log("Total Cost:", finalCost);

const a = 5;
const b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log (dayOfWeek);
//Get Item from Array
console.log(dayOfWeek[4]);

//Add one more day to the array
dayOfWeek.push("sun");
console.log (dayOfWeek);

const player = {
    name: "nico",
    points: 10,
  }

  console.log(player);
  console.log(player.name);

//값 추가
  player.lastname = "potato";
  console.log(player)

// object 값 변경
  player.name = "hyang";
  console.log(player.name);
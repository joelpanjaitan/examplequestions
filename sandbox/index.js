function highestTopSpeed(data) {
  if (!data) {
    return "NoData";
  }
  let array = data.split(",");
  let result = [];
  for (i = 0; i < array.length; i++) {
    let newarray = array[i].split(":");
    let speed = newarray[1];
    let newspeed = speed.slice(0, 3);
    result.push(newspeed);
  }
  let topspeed = Math.max(...result);
  return topspeed;
}

console.log(
  highestTopSpeed("Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h")
); // 180
console.log(highestTopSpeed("Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h")); // 200
console.log(highestTopSpeed("Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h")); // 175
console.log(highestTopSpeed("")); //NoData *

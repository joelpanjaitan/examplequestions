function numberPrimeCruncher(input) {
  let result = [];
  let total = 0;
  let average;
  let newresult = [];
  for (let i = 0; i <= input; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      result.push(i);
      total += i;
      average = total / result.length;
    }
  }
  for (let k = 0; k <= result.length; k++) {
    if (result[k] > average) {
      newresult.push(result[k]);
    }
  }
  return newresult;
}

console.log(numberPrimeCruncher(44));

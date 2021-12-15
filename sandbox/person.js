function encrypt(input) {
  let result = [];
  for (i = 0; i < input.length; i++) {
    input.split("");
    if (input[i] == "a") {
      result.push("@");
    } else if (input[i] == "b") {
      result.push("#");
    } else if (input[i] == "c") {
      result.push("$");
    } else if (input[i] == "d") {
      result.push("%");
    } else if (input[i] == "e") {
      result.push("^");
    } else if (input[i] == "f") {
      result.push("&");
    } else if (input[i] == "g") {
      result.push("*");
    } else if (input[i] == "h") {
      result.push("(");
    } else if (input[i] == "i") {
      result.push(")");
    } else if (input[i] == "j") {
      result.push("-");
    } else if (input[i] == "k") {
      result.push("+");
    } else if (input[i] == "l") {
      result.push("1");
    } else if (input[i] == "m") {
      result.push("2");
    } else if (input[i] == "n") {
      result.push("3");
    } else if (input[i] == "o") {
      result.push("4");
    } else if (input[i] == "p") {
      result.push("5");
    } else if (input[i] == "q") {
      result.push("6");
    } else if (input[i] == "r") {
      result.push("7");
    } else if (input[i] == "s") {
      result.push("8");
    } else if (input[i] == "t") {
      result.push("9");
    } else if (input[i] == "u") {
      result.push("0");
    } else if (input[i] == "v") {
      result.push("[");
    } else if (input[i] == "w") {
      result.push("]");
    } else if (input[i] == "x") {
      result.push("{");
    } else if (input[i] == "y") {
      result.push("}");
    } else if (input[i] == "z") {
      result.push("\
      ");
    }
  }
  return result.join("");
}

console.log(encrypt("keanu"));

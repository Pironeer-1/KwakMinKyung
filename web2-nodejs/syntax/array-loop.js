var number = [1, 400, 12, 34];
var i = 0;
var total = 0;
while (i < number.length) {
  total = total + number[i];
  i = i + 1;
}
console.log(`total : ${total}`);

let count = 0;
for (let j = 0; j < number.length; j++) {
  count = count + number[j];
}

console.log(`count : ${count}`);

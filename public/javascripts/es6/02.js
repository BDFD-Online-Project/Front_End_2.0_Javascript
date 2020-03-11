const number = [5, 10, 15, 20, 25, 30];
const double1 = number.map(function(number) {
  return number * 2;
});
const double2 = number.map(number => {
  return number * 2;
});

console.log('double1', double1);
console.log('double2', double2);

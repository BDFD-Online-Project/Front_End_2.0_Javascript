//Var Define
var price = 1000;
var price1 = 100; //var 第一次定义值
var price1 = 150; //var 重新定义
var count = 10;
price1 = 200; //var 重新赋值
function getPrice() {
  var price2 = 300;
  //这个价格300只能在这个函数中使用
  console.log('price2-2', price2);
}
if (count > 5) {
  var price3 = price1 * 0.8;
  //none function scope, then it is global value
  console.log('price3-1', price3);
}

console.log('price1-1', price1); //250
//var variable is function scope
//variable define inside function scope could not use on outside
// console.log('price2-2', price2); //undefine
console.log('price3-2', price3); //200
getPrice(); //300

//Let Define
let total1 = 100; //let 第一次定义值
// let total1 = 150; //error not able to create same name variable in let
total1 = 200; //let 重新赋值
if (count > 5) {
  let total2 = total1 * 0.8;
  //block scope, then it is valid on this block
  console.log('total2-1', total2); //160
}

console.log('total1', total1); //200
// console.log('total2-2', total2); //undefine

//Const Define
const tol1 = 200;
// const tol1 = 100; //error
// tol1 = 150; //error
if (count > 5) {
  const to12 = tol1 * 0.8;
  console.log('to12-1', to12); //160
  //block scope, then it is valid on this block
}
console.log('tol1', tol1); //200
// console.log('to12-2', to12); //undefine

const tot3 = {
  price: 1111,
  discount_rate: 0.6
};
console.log('price', price); //1000
console.log(' tot3', tot3); //object
// freeze function, not able change anything in object
//const tot3 = Object.freeze(tot3) is not work as well, const cant reassign
const tot3_freeze = Object.freeze(tot3);

//IIFE
(function() {
  var name = 'jelly';
  console.log(name);
})();

//用const 解决
{
  const name = 'jelly';
}

for (var i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log(`i:${i}`);
  }, 1000);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log(`i:${i}`);
  }, 1000);
}

console.log(pricea); //undefine
var pricea = 100;
// console.log(priceb); //reference error
let priceb = 100;
// console.log(pricec); //reference error
const pricec = 100;

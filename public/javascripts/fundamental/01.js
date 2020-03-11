// 可以将JS 代码编写到script标签中

// alert('Hello World -1 !'); //页面起始就执行
document.write('Hello World -2!'); //页面中执行
console.log('Hello World -3！'); //控制台页面中执行

//声明变量
var a;
//为变量赋值
a = '123';
//可以声明和赋值一起
var age = 18;

console.log('a', a);
console.log('type', typeof a);
console.log('age ', age);
console.log('type', typeof age);

console.log('max number : ', Number.MAX_VALUE);
console.log('max number : ', Number.MIN_VALUE);

//尽量不要用一样的变量，后面的变量会代替前面相同变量
//转换成String
var a = true;
a = a.toString();
var b = '123';
b = +b;
//转换成Number
var c = 'abc123';
c = parseInt(c);

console.log('a is ', a, 'and type is:', typeof a);
console.log('b is ', b, 'and type is:', typeof b);
console.log('c is ', c, 'and type is:', typeof c);

var d = 10;
d++;
//此时d 已经11
console.log('d++ =', d++);

var e = 10;
++e;
//此时e 已经11
console.log('++e =', ++e);
//自增
var f = 20;
//20 + 22  + 22
var result = f++ + ++f + f;
console.log('result =', result);
//result = 64

//自减
var n1 = 10;
var n2 = 20;
var n = n1++; //n1 = 11  n1++ = 10
console.log('n=' + n); // 10
console.log('n1=' + n1); //11
n = ++n1; //n1 = 12  ++n1 =12
console.log('n=' + n); //12
console.log('n1=' + n1); //12
n = n2--; // n2=19 n2--=20
console.log('n=' + n); //20
console.log('n2=' + n2); //19
n = --n2; //n2=18 --n2 = 18
console.log('n=' + n); //18
console.log('n2=' + n2); //18

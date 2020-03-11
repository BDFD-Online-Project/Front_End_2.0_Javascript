//取反！
// var a = true;
// a = !a;
// console.log(a);

//逻辑运算符
//如果两个值都是true则返回true
var result = true && true;
//只要有一个false，就返回false
result = true && false;
result = false && true;
result = false && false;
//console.log("result = "+result);
//第一个值为true，会检查第二个值
//true && alert("看我出不出来！！");
//第一个值为false，不会检查第二个值
//false && alert("看我出不出来！！");
//两个都是false，则返回false
result = false || false;
//只有有一个true，就返回true
result = true || false;
result = false || true;
result = true || true;
//console.log("result = "+result);
//第一个值为false，则会检查第二个值
//false || alert("123");
//第一个值为true，则不再检查第二个值
//true || alert("123");

//关系运算符
result = 5 > 10; //false
result = 5 > 4; //true
result = 5 > 5; //false
result = 5 >= 5; //true
result = 5 >= 4; //true
result = 5 < 4; //false
result = 4 <= 4; //true
//console.log("result = "+result);
//console.log(1 > true); //false
//console.log(1 >= true); //true
//console.log(1 > "0"); //true
//console.log(10 > null); //true
//任何值和NaN做任何比较都是false
//console.log(10 <= "hello"); //false
//console.log(true > false); //true
//console.log("1" < "5"); //true
//console.log("11" < "5"); //true
//比较两个字符串时，比较的是字符串的字符编码
//console.log("a" < "b");//true
//比较字符编码时是一位一位进行比较
//如果两位一样，则比较下一位，所以借用它来对英文进行排序，多的赢
//console.log("abc" < "bcd");//true
//比较中文时没有意义
//console.log("戒" > "我"); //true

/*
 * 在字符串中使用转义字符输入Unicode编码
 * 	\u四位编码
 */
console.log('\u2620');

//三元运算符
var a = 300;
var b = 143;
var c = 50;
//a > b ? alert("a大"):alert("b大");
//获取a和b中的最大值
//var max = a > b ? a : b;
//获取a b c 中的大值
//max = max > c ? max : c;
//这种写法不推荐使用，不方便阅读
var max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log('max = ' + max);
//"hello"?alert("语句1"):alert("语句2");

/*
 * 流程控制语句
 * 	- JS中的程序是从上到下一行一行执行的
 * 	- 通过流程控制语句可以控制程序执行流程，
 * 		使程序可以根据一定的条件来选择执行
 *  - 语句的分类：
 * 		1.条件判断语句
 * 		2.条件分支语句
 * 		3.循环语句
 *
 *
 * 条件判断语句：
 * 	- 使用条件判断语句可以在执行某个语句之前进行判断，
 * 		如果条件成立才会执行语句，条件不成立则语句不执行。
 *  - if语句
 * 	- 语法一：
 * 		if(条件表达式){
 * 			语句...
 * 		}
 *
 * 		if语句在执行时，会先对条件表达式进行求值判断，
 * 		如果条件表达式的值为true，则执行if后的语句，
 * 		如果条件表达式的值为false，则不会执行if后的语句。
 * 			if语句只能控制紧随其后的那个语句,
 * 				如果希望if语句可以控制多条语句，
 * 				可以将这些语句统一放到代码块中
 * 			if语句后的代码块不是必须的，但是在开发中尽量写上代码块，即使if后只有一条语句
 *
 */
/*
 * if语句
 * 	语法二:
 * 		if(条件表达式){
 * 			语句...
 * 		}else{
 * 			语句...
 * 		}
 *
 * 	if...else...语句
 * 		当该语句执行时，会先对if后的条件表达式进行求值判断，
 * 			如果该值为true，则执行if后的语句
 * 			如果该值为false，则执行else后的语句
 *
 * 	语法三：
 * 		if(条件表达式){
 * 			语句...
 * 		}else if(条件表达式){
 * 			语句...
 * 		}else if(条件表达式){
 * 			语句...
 * 		}else{
 * 			语句...
 * 		}
 *
 * 		if...else if...else
 * 			当该语句执行时，会从上到下依次对条件表达式进行求值判断
 * 			如果值为true，则执行当前语句。
 * 			如果值为false，则继续向下判断。
 * 			如果所有的条件都不满足，则执行最后一个else后的语句
 * 			该语句中，只会有一个代码块被执行，一旦代码块执行了，则直接结束语句
 */

age = 90;
if (age > 17 && age <= 30) {
  console.log('你是' + age + '岁,你已经成年了');
} else if (age > 30 && age <= 60) {
  console.log('你是' + age + '岁,你已经中年了');
} else if (age > 60 && age <= 80) {
  console.log('你是' + age + '岁,你已经退休了');
} else {
  console.log('你是' + age + '岁,你岁数挺大的了~~');
}

//Question 1
//如果测试 Question 1 则把下面变为非备注
// var score = prompt('输入你要输入的内容(0-100):');
// if (score > 100 || score < 0 || isNaN(score)) {
//   alert('enter wrong value');
// } else {
//   if (score == 100) {
//     alert('奖励一辆BMW');
//   } else if (score >= 80 && score <= 99) {
//     alert('奖励一台iphone15s');
//   } else if (score >= 60 && score <= 79) {
//     alert('奖励一本参考书');
//   } else {
//     alert('什么奖励也没有。');
//   }
// }

//Question 2
//如果测试 Question 2 则把下面变为非备注
// var height = prompt('输入你的身高(in cm):');
// var money = prompt('输入你的财富(in ten thousand):');
// var face = prompt('输入你的颜值(0-1000):');
// alert('height is:' + height + ', money is:' + money + ', face is' + face + '.');
// if (height >= 180 && money >= 1000 && face >= 500) {
//   alert('我一定要嫁给他');
// } else if (height >= 180 || money >= 1000 || face >= 500) {
//   alert('嫁吧，比上不足，比下有余。');
// } else {
//   alert('不嫁！');
// }

//Question 3
//如果测试 Question 3 则把下面变为非备注
// var num1 = +prompt('输入你的第一个数字:');
// var num2 = +prompt('输入你的第二个数字:');
// var num3 = +prompt('输入你的第三个数字:');
// alert(
//   'first no. is:' +
//     num1 +
//     ', second no. is:' +
//     num2 +
//     ', third no. is' +
//     num3 +
//     '.'
// );
// if (num1 >= num2 && num1 >= num3) {
//   if (num2 >= numb3) {
//     alert('排序是:' + num1 + ',' + num2 + ',' + num3);
//   } else {
//     alert('排序是:' + num1 + ',' + num3 + ',' + num2);
//   }
// } else if (num2 >= num1 && num2 >= num3) {
//   if (num1 >= numb3) {
//     alert('排序是:' + num2 + ',' + num1 + ',' + num3);
//   } else {
//     alert('排序是:' + num2 + ',' + num3 + ',' + num1);
//   }
// } else {
//   if (num1 >= num2) {
//     alert('排序是:' + num3 + ',' + num1 + ',' + num2);
//   } else {
//     alert('排序是:' + num3 + ',' + num2 + ',' + num1);
//   }
// }

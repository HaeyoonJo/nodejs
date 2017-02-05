/*
	calculate
*/
console.log(process.argv);

var num1 = parseInt(process.argv[2]);
var op = process.argv[3];
var num2 = parseInt(process.argv[4]);

console.log(num1, op, num2);
/*
console.log(num2);
console.log(num3);
*/

if(op === '+'){
  console.log('result: ' , num1 + num2);
}else if(op === '-'){
  console.log('result: ' , num1 - num2);
}

/*
if(num2 == '+'){console.log('result:', num1 + num3);}
if(num2 == '-'){console.log('result:', num1 - num3);}
if(num2 == 'null'){console.log('result:', 'nothing');}
*/

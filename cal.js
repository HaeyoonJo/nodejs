console.log(process.argv);

var num1 = parseInt(process.argv[2]);
var num2 = process.argv[3];
var num3 = parseInt(process.argv[4]);

console.log(num1);
console.log(num2);
console.log(num3);

if(num2 == '+'){console.log('result:', num1 + num3);} 
if(num2 == '-'){console.log('result:', num1 - num3);}
if(num2 == 'null'){console.log('result:', 'nothing');}

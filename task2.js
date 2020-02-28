//"use strict"; будет работать только современный код, старые решения не будут реализованы (вроде)

let name = prompt('Введитве Ваше имя: ');
alert("Привет, " +name+ "!");

let age = prompt('Сколкьо Вам лет? ');
const cutentYear = 2020;
let yob = cutentYear - age;
alert("Ваш год рождения: " +yob);

let lenth = prompt('Что бы узнать периметр, введите длину стороны квадрата: ');
let sumLenth = lenth*4;
alert("Периметр квадрата равен " +sumLenth);

let rad = prompt('Что бы узнать площадь окружности, введите ее радиус: ');
const pi = 3.14;
let area = pi*rad*rad;
alert("Площадь окружности: " +area);

let distance = prompt('Введите расстояние между двумя городами: ');
let time = prompt('За сколько часов Вы хотите добраться? ');
let speed = distance/time;
alert("Что бы добраться до места назначения за " +time+ " часа, Вам нужно будет ехать со скоростью " +speed+ " км/ч!");

let dollars = prompt('Введите сумму в долларах: ');
const exchangeRates = 0.92
let euro = dollars*exchangeRates;
alert(dollars+ "$ =" +euro+ "€");


let sizeGb = prompt('Введите размер флешки в Gb: ');
let fileSize = 820;
let sizeMb  = sizeGb*1024;
let qunatityFiles = 0;
// через цикл for реальзовать не получилось.
// for ( ; sizeMb > fileSize; sizeMb - fileSize ) {         

//     qunatityFiles = qunatityFiles + 1;
// }
while (sizeMb >= fileSize){
    sizeMb = sizeMb - fileSize;
    qunatityFiles++;
}
alert(`${qunatityFiles} файла(ов) поместится на флешку объемом ${sizeGb} гигабайт`);
alert(`На флешке останется ${sizeMb} мегабайт(а) свободного места`);

let money = prompt('Введите сумму наличных: ');
let cost = prompt('Введите стоимость одной шоколадки: ');
let qunatityChocolates = 0;
while (money >= cost){
    money = money - cost;
    qunatityChocolates++;
}
alert(`${qunatityChocolates} шоколадок вы сможете купить`);
alert(`${money} гривен у вас останется`);

let number = prompt('Введите трёхзначное число: ');
let num00X = number % 10;
let num0X0 = ((number - num00X) / 10) % 10;
let numX00 = ((number - num00X) - num0X0*10) / 100;

alert(`Ваше число ${number}. Ваше число наоборот - ${num00X}${num0X0}${numX00}`);
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numMin (num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         document.write(num1);
//         console.log(num1);
//     }else if (num2 < num3 && num2 < num1) {
//         document.write(num2)
//         console.log(num2);
//     }else {
//         document.write(num3);
//         console.log(num3);
//     }
// }
// numMin(400, 300, 10);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numMax (num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1);
//         console.log(num1);
//     }else if (num2 > num3 && num2 > num1) {
//         document.write(num2);
//         console.log(num2);
//     }else {
//         document.write(num3);
//         console.log(num3);
//     }
// }
// numMax(50000, 20000, 15000);

// - створити функцію яка повертає найбільше число з масиву
// let maxArray = [300, 2, 4, 8, 54, 100000, 1, 1488];
// function arrayMax (array) {
//     let max = array[0];
//     for (const element of array) {
//         if (element > max) {
//             max = element;
//         }
//     }
//     return max;
// }
// document.write(`<h2>Max element of array: ${arrayMax(maxArray)}</h2>`);

// - створити функцію яка повертає найменьше число з масиву
// let minArray = [100, 3, 1488, 90000, 13, 67, 89];
// function arrayMin (array) {
//     let min = array][0];
//     for (const element of array) {
//         if (element < min){
//             min = element;
//         }
//     }
//     return min;
// }
// document.write(`<h2>Min element of array: ${arrayMin(minArray)}</h2>`)
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function sumElement(arry) {
//     let sum = 0;
//     for (const arrayElement of arry) {
//         sum += arrayElement;
//         sum = arrayElement + sum;
//     }
//     return sum;
// }
// document.write(sumElement(sumArray));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let averageArray = [1, 2, 3];
// function average (array) {
//     let  sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//         sum = arrayElement + sum;
//     }
//     return sum/array.length;
// }
// document.write(average(averageArray));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minMax (arg) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log('max',max);
//     return min;
// }
// document.write('The minimum number of entries:' + minMax(100, 20, 3, 100, 1488));

// - створити функцію яка заповнює масив рандомними числами
// function funRandom (length) {
//     let arrayEmpty = [];
//     for (let i = 0; i < length; i++) {
//         arrayEmpty.push(Math.floor(Math.random()*100));
//     }
//     return arrayEmpty;
// }
// document.write(funRandom(12));
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomNumber (length, limit) {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.round(Math.random()*limit));
//     }
//     return emptyArray;
// }
// document.write(randomNumber(10,100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1, 2, 3];
// function revers (arr) {
//     let array = [];
//     for (let i = length -1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = newArr[i];
//     }
//     // return newArr;
// }
// document.write(arr);

*** Шановний Ментор доброго дня.Я щось з останнім завданням не розібрався,
    розтлумачте мені будь-ласка його так як кажуть 'на хлопский розум)'--Дякую.***









































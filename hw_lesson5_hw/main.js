                // ***Домашня робота***
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// let areaRect = (a, b) => {return a * b}
// console.log(areaRect(20,20));
// document.write('Площа прямокутника :' + areaRect(20, 20));

// - створити функцію яка обчислює та повертає площу кола
// let areaCircle = (r) => {
//     let radius = r ** 2;
//     return 3.14 * radius;
// }
// console.log(areaCircle(20, 20));
// document.write('Площа круга:' + areaCircle(20, 20));

// - створити функцію яка обчислює та повертає площу
// let areaCylinder = (r, h) => {
//     return 2 * 3.14 * r * h;
// }
// console.log(areaCylinder(20, 20));
// document.write('Площа циліндра :' + areaCylinder(20, 20));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = [1, 2, 3, 4, 5, 'hello world', 'okten'];
// let dataArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i]);
//     }
// }
// dataArray(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let dataP = (text) => {
//     document.write(`<p>${text}</p>`);
//     document.write(`<p>${text}</p>`);
//     document.write(`<hr>`);
// }
// dataP('Okten is cool');
// --Через цикл...
// let  dataP = (text) => {
//     for (let i = 0; i <= text.length; i++) {
//         document.write(`<p>${text}</p>`);
//     }
// }
// dataP('Okten is cool');

// - створити функцію яка  створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
// let createUl = (argument) => {
//     document.write(`<ul>`);
//     document.write(`<li>${argument}</li>`);
//     document.write(`<li>${argument}</li>`);
//     document.write(`<li>${argument}</li>`)
//     document.write(`</ul>`);
// }
// createUl('Serj is a very cool dude!');

// - створити функцію яка  створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом,який є числовим (тут використовувати цикл)
// let createUlDinamic = (text, number) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < number; i++) {
//        document.write(`<li>${text}</li>`);
//     }
//         document.write(`</ul>`);
// }
// createUlDinamic('Okten is a very beautiful school', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
// let anyArray= [true, false, 12, 1488, 'Michael Jackson'];
//
// let fnPrimitives = (array) => {
//     document.write(`<ol>`);
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</<ol>`);
// }
// fnPrimitives(anyArray);

// - створити функцію яка приймає масив об'єктів з наступними полями:
// id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let newArray = [{id: 1, name: 'Igor', age: 19}, {id: 2, name: 'Vetal', age: 23} ,{id: 3, name: 'Marik', age: '30'}];
//
// let odjArray = (array) => {
//     document.write(`<ol>`);
//     for (let arrayElement of array) {
//        document.write(`<div>${arrayElement.id}.${arrayElement.name}.${arrayElement.age}</div>`);
//     }
// }
// odjArray(newArray);

      // ***Class work**
 // Створити функцію яка приймає три числа та виводить найменше.(Без Math.min);
// let minNum = (num1, num2, num3) => {
//     if (num1 < num2 && num1 < num3) {
//         console.log(num1);
//         document.write(num1);
//     } else  if (num2 < num3 && num2 < num1) {
//         console.log(num2);
//         document.write(num2);
//     }else {
//         console.log(num3);
//         document.write(num3);
//     }
// }
// minNum(500, 300, 91);

// cтворити функцію яка приймає три числа та виводить найбільше.
// let maxNum = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1);
//         document.write(num1);
//     }else if (num2 > num1 && num2 > num3) {
//         console.log(num2);
//         document.write(num2);
//     }else {
//         console.log(num3);
//         document.write(num3);
//     }
// }
// maxNum(900, 500, 93);

  // Створити функцію яка повертає найбільше число з масиву.
// let maxArray = [200, 1, 2, 3, 980 ,1488, 70000, 19, 64];
// let arrayMax = (array) => {
//     let max = array[0];
//     for (let element of array) {
//         if (element > max) {
//             max = element;
//         }
//     }
//     return max;
// }
// document.write(`<h1>Найбільший елемент масиву: ${arrayMax(maxArray)}</h1>`);

                // Створити функцію яка повертає найменше число з масиву
// let minArray = [13, 1, -2, 3, 4, -900, 43790, 8100, 1488];
// let arrayMin = (array) => {
//     let min = array[0];
//     for (let element of array) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min;
// }
// document.write(`<h1>Найменший елемент масиву:${arrayMin(minArray)}</h1>`);

                // створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень
                // let serednieArray = [1,2,3]; // 6/3=2
                // let serednie =  (array) => {
                //     let sum = 0;
                //     for (let arrayElement of array) {
                //         sum = arrayElement + sum;
                //     }
                //     return sum/array.length;
                // }
                // document.write(serednie(serednieArray));

                // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

                // let minMax = (...arg) => {
                //     let min = arg[0];
                //     let max = arg[0];
                //     for (let element of arg) {
                //         if (element > max) {
                //             max = element;
                //         }
                //         if (element < min) {
                //             min = element;
                //         }
                //     }
                //     console.log("max ", max);
                //     return min;
                // }
                // document.write('Мінімальне число з введених: ' + minMax(12, 1488, -979, 12833));

                // - створити функцію яка заповнює масив рандомними числами

                // let fnRandom = (length)=> {
                //     let arrayEmpty = [];
                //     for (let i = 0; i < length; i++) {
                //         arrayEmpty.push(Math.floor(Math.random()*1000));
                //     }
                // return arrayEmpty
                // };
                // document.write(fnRandom(19));


                // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
                // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

                // let randomNum = (length,limit) => {
                //     let emptyArray = [];
                //     for (let i = 0; i < length; i++) {
                //         emptyArray.push(Math.round(Math.random() * limit));
                //     }
                //     return emptyArray;
                // }
                // document.write(randomNum(40,1000));


                // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

                // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                // let reverse = (arr) => {
                //     let newArr = [];
                //     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
                //         newArr[ri] = arr[i];
                //     }
                //     return newArr;
                //  }
                //  console.log(reverse(array));


















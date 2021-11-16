// Home_Work-lesson_3: 16.11.2011року.
// (1).
// -створити масив з:
//     -- з 5 числових значень
//     -- з 5 стічкових значень
//     -- з 5 значень стрічкового, числового та булевого типу
//     -- та вивести його в консоль;
//
// let arrayText = ['nine' , 'owu', 'dell' , 'okten' , 'brother'];
// let arrayNum = [11, 22, 6006, 1488, 1902];
// let arryMix = ['team' , 'one', 1987, 'true', 'false']
// console.log(arrayText, arrayNum ,arryMix);


// (2).
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arrayPro = [];
// arrayPro.push('name', 'image');
// arrayPro[2] = 1488;
// arrayPro[3] = 'brother';
// console.log(arrayPro);
// document.write(arrayPro);


// (3).
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// for (let i = 0; i < 10; i++) {
//     let div = document.createElement('div');
//     div.style.background= 'pink';
//     div.style.height = '200px'
//     div.style.width = '200px'
//     div.style.marginBottom = '5px';
//     document.body.appendChild(div);
//     div.innerText = 'home_work';
// }
//
// for (let i = 0; i < 10; i++) {
//     let div = document.createElement('div');
//     div.style.background= 'grey';
//     div.style.height = '200px'
//     div.style.width = '200px'
//     div.style.marginBottom = '5px';
//     document.body.appendChild(div);
//     div.innerText = 'home_work';
//     document.write(`${i}`);
// }
//

// let i = 0;
// while (i < 20) {
//     let div = document.createElement('div');
//     div.style.background= 'grey';
//     div.style.height = '200px'
//     div.style.width = '200px'
//     div.style.marginBottom = '5px';
//     document.body.appendChild(div);
//     div.innerText = 'Okten is cool'
//     i++;
// }
//
//
// let i = 0;
// while (i < 20) {
//     let div = document.createElement('div');
//     div.style.background= 'red';
//     div.style.height = '200px'
//     div.style.width = '200px'
//     div.style.marginBottom = '5px';
//     document.body.appendChild(div);
//     div.innerText = 'Okten is cool';
//     document.write(`${i}`);
//     i++;
// }

// (4).
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayStr = ['one', 'right', 'left', 'up', 'down', 'space', 'around', 'owu', 'hello', 'cool'];
// for (i = 0; i < arrayStr.length; i++) {
//     console.log(arrayStr[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
//     let arrayNum = [10, 9, 8, 7, 6, 1488, 89, 92, 71, 3,]
//     for (i = 0; i < arrayNum.length; i++) {
//     console.log(arrayNum[i]);
// }
//

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrayAll = ['true', 'one', 1488, 1902, 1905, 'slava', 'vira', 'ira', [11 ,22 ,33 ,1488,'Volodymyr'], { name : 'dima',status : 'true'}];
// for (i = 0; i < arrayAll.length; i++) {
//     console.log(arrayAll[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrayMix = [false, 'five', 44, 33, 90, 'petya', 'vika', 1488,{name:'alla' , age: 32, status: true}, [12, 31, 'sanya', 'yana']];
// for (i = 0; i < arrayMix.length; i++) {
//     if (typeof arrayMix[i] === 'boolean') {
//         console.log(arrayMix[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arrayAny = [false, 'nine', 10, 14, true, 'petya', 'visa', 'iron', 22, 'roman']
// for (i = 0; i < arrayAny.length; i++) {
//     if (typeof arrayAny[i] === 'number') {
//         console.log(arrayAny[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arrayString = [false, 'two', 1996, true, 'okten', 23, 45, 'Basia', {name: 'iron', age: 55,status: true}, [11, 22, 33, 44, 55, 99, 1001], 'vika'];
// for (i = 0; i < arrayString.length; i++) {
//     if (typeof arrayString[i] === 'string') {
//         console.log(arrayString[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// // Вивести в консоль всі його елементи в циклі.

// let arrayEmpty = [];
// arrayEmpty[0] = 'Serj';
// arrayEmpty[1] = 'Zhuravlev';
// arrayEmpty[2] = 1488;
// arrayEmpty[3] = 'katya';
// arrayEmpty[4] = 8099;
// arrayEmpty[5] = 'burn';
// arrayEmpty[6] = 'armin';
// arrayEmpty[7] = 'you';
// arrayEmpty[8] = false;
// arrayEmpty[9] = true;
//
// for (let i = 0; i < arrayEmpty.length; i++) {
//     console.log(arrayEmpty[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log('поточний крок циклу : ' + i + ' ');
//     document.write('поточний крок циклу : ' + i + ' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let my = 0; my < 100; my++) {
//     console.log('поточний крок циклу : ' + my + ' ');
//     document.write('поточний крок циклу : ' + my + ' ');
// }
//


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let p = 0; p < 100; p+=2) {
//     console.log('поточний крок циклу : ' + p + ' ');
//     document.write('поточний крок циклу : ' + p + ' ');
// }
//

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let z = 0; z < 100; z++) {
//     if(z % 2 === 0){
//         console.log('поточний крок циклу : ' + z + ' ');
//         document.write('поточний крок циклу : ' + z + ' ');
//     }
// }



// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let q = 0;q < 100; q++) {
//     if(q % 2 === 1){
//         console.log('поточний крок циклу : ' + q + ' ');
//         document.write('поточний крок циклу : ' +q + ' ');
//     }
// }












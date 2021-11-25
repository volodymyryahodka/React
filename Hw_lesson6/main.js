// **Home_work_lesson6-hw;**
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase);
// let str1 = 'Lorem ipsum';
// let toUpperCase1 = str1.toUpperCase();
// console.log(toUpperCase1);
// let str2 = 'javascript is cool';
// let toUpperCase2 = str2.toUpperCase();
// console.log(toUpperCase2);
// let srt3 = 'Okten is cool school';
// let toUpperCase3 = srt3.toUpperCase();
// console.log(toUpperCase3);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// let str = 'HELLO WORLD';
// let toLowerCase = str.toLowerCase();
// console.log(toLowerCase);
//
// let str1 = 'LOREM IPSUM';
// let toLowerCase1 = str1.toLowerCase();
// console.log(toLowerCase1);
//
// let str2 = 'JAVASCRIPT IS COOL';
// let toLowerCase2 = str2.toLowerCase();
// console.log(toLowerCase2);
//
// let str3 = 'OKTEN SCHOOL IS COLL!';
// let toLowerCase3 = str3.toLowerCase();
// console.log(toLowerCase3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(str);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray;
// stringToarray = (str) => {
//     return str.split(' ');
// };
// let str = 'Каждый охотник желает знать';
// let split = str.split(' ');
// document.write(split);
// console.log(split);

// let str = 'Каждый охотник желает знать';
// let stringToarray = (str) => str.split(' ');
// console.log(stringToarray(str));

// let stringToarray = (str) => {
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// console.log(arr);
// document.writeln(arr);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок,
// що складається із зазначеної кількості символів.
//   let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));

// let deleteCharacters = (str, index) => {
//     return str.substr(0, index);
// }
// let str = 'Каждый охотник желает знать';
// document.writeln(deleteCharacters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент
// і вставляє тире (-) між словами. При цьому всі символи рядка
// необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) => {
//     let splitJoinUpper = str.split(' ').join('-').toUpperCase();
//     return splitJoinUpper;
// }
//
// let string = 'HTML JavaScript PHP Java';
// console.log(insert_dash(string));
// document.write(insert_dash(string));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр
// першого символу рядка з нижнього регістру у верхній.

// let strArg = (str) => {
//    if (!str) return str;
//    return str[0].toUpperCase () + str.slice(1);
// }
// console.log(strArg('hello okten'));
// document.write(strArg('hello okten'));

// - Напишіть функцію capitalize(str), яка повертає рядок,
// у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// document.write(capitalize('okten hi you are welcome'));
// console.log(capitalize('okten hi you are welcome'));

// **Cl_Work**

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// let name = (string, symbol) => {
//     let {join, push} = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) push(item);
//         })
//         console.log(join(' '))
//     }
// }
// name(n3, '_',n2, '-' ,n1, '.');
// console.log(n1,n2,n3);

//  - створити функцію, яка генерує масив рандомних числових цілих значень
//  в діапазоні від 0 до 100.
// let random = (length, num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//          emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray;
// }
// let result = random(10, 100);
// console.log(result);

// - створити (або згенерувати, за допомоги попередньої функції)
// масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let sortRandom = (length, num) => {
//     let emptyArray = [];
//     for (let i = 1; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray.sort((a, b) => a - b);
// };
// console.log(sortRandom(10, 1000));

// - створити (або згенерувати, за допомоги попередньої функції)
// масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter,
// залишивши тільки парні числа.

// let funcFilter = (length, num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray.filter(value => value % 2 === 0);
// };
// console.log(funcFilter(10, 1000));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги
// попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві
// на стрінгові.
//
// let arrayRandom = (length, num) => {
//     let emptyArray = [];
//     for (let i = 0; i < length; i++) {
//         emptyArray.push(Math.floor(Math.random() * num));
//     }
//     return emptyArray.map(value => value.toString());
// };
// console.log(arrayRandom(10, 1000));

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності
// від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

//
// let sortNums = (arr, direction) => {
//     if (direction === 'asc') return arr.sort((a, b) => a - b);
//     if (direction === 'desc') return arr.sort((a, b) => b - a);
// };
// console.log(sortNums([1, 56, 9, -20, 2345, 34, 98, 5], 'desc') );
//

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// - є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ]
//
// let newSort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(newSort);
//
// let newFilter = coursesAndDurationArray.filter((value) => {
//     return value.monthDuration > 5;
// });
// console.log(newFilter);


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// let cutString = (str, n) => {
//     const res = [];
//     while (str.length) {
//         res.push(str.substr(0, n));
//         str = str.slice(n);
//     }
//     console.log(res);
//     return res;
// };
// document.writeln(cutString('наслаждение', 3));






















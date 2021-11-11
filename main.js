
// Home_Work_JS_Tasks;
//
// 1- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// 2- Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// 3- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// 4- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// 5- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// 6- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
//
// 7- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");
//
//
// Home_Work_JS_Answers;

// 1)
// let a;
// a = "hello";
// console.log("hello");
// alert("hello");
// document.write("hello");
//
// let b;
// b = "owu";
// console.log("owu");
// alert("owu");
// document.write("owu");
//
// let c;
// c = "com";
// console.log("com");
// alert("com");
// document.write("com");
//
// let d;
// d = "ua";
// console.log("ua");
// alert("ua");
// document.write("ua");
//
// let e;
// e = 1;
// console.log(e);
// alert("1");
// document.write("1");
//
// let f;
// f = 10;
// console.log(f);
// alert("10");
// document.write("10");
//
// let g;
// g = -999;
// console.log(g);
// alert("-999");
// document.write("-999");
//
// let h;
// h = 123;
// console.log(h);
// alert("123");
// document.write("123");
//
// let j;
// j = 3.14;
// console.log(j);
// alert("3.14");
// document.write("3.14");
//
// let k;
// k = 2.7;
// console.log(k);
// alert("2.7");
// document.write("2.7");
//
// let l;
// l = 16;
// console.log(l);
// alert("16");
// document.write("16");

// let m;
// m = 200;
// console.log(m);
// console.log(200 == 200);
// console.log(200 === "200");


// 2- Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let a;
// a = "hello";
// a = "owu hello";
// console.log("owu hello");
// alert("owu hello");
// document.write("owu hello");
//
//
// let b;
// b = "owu";
// b = "owu so cool";
// console.log("owu so cool");
// alert("owu so cool");
// document.write("owu so cool");
//
//
// let c;
// c = "com";
// c = "common";
// console.log("common");
// alert("common");
// document.write("common");
//
//
// let d;
// d = "ua";
// d = "owu is ua!"
// console.log("ua");
// alert("ua");
// document.write("ua");
//
//
// let e;
// e = 1;
// e = 1000;
// console.log("e");
// alert("1000");
// document.write("1000");
//
//
// let f;
// f = 10;
// f = 100500;
// console.log("f");
// alert("100500");
// document.write("100500");
//
//
// let g;
// g = -999;
// g = -999000;
// console.log("g");
// alert("-999000");
// document.write("-999000");
//
//
// let h;
// h = 123;
// h = 123321;
// console.log("h");
// alert("123321");
// document.write("123321");
//
//
// let j;
// j = 3.14;
// j = 2001.1;
// console.log("j");
// alert("2001.1");
// document.write("2001.1");
//
//
// let k;
// k = 2.7;
// k = 222.777;
// console.log("k");
// alert("222.777");
// document.write("222.777");
//
//
// let l;
// l = 16;
// l = 161616;
// console.log("l");
// alert("161616");
// document.write("161616");
//
//
// let m;
// m = 200;
// m = 2002;
// console.log(2002 == 2002);
// console.log(2002 === "2002");
// console.log("m");
// alert("ua");
// document.write("ua");

// 3- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//     З'єднати їх в одну змінну person. (Не об'єкт)

// let firstName;
// let middleName;
// let lastName;
//
// firstName = "Ягодка";
// middleName = "Володимир";
// lastName = "Владиславович";
//
// let Person;
// Person = `firstName``middleName``lastName`;
//

// 4- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//       Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// alert("Вітаю");
// firstName = prompt("Володимир");
// middleName = prompt("Владиславович");
// alert("Мені");
// lastName = prompt("34");
// alert("роки");
//

// 5- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// console.log(typeof a);
// console.log(a);
//
// let b = '100';
// console.log(typeof b);
// console.log(b);
//
// let c = true;
// console.log(typeof c);
// console.log(19 > 21);

// 6- Визначити відповідний оператор в виразах щоб вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//  1-   5 ? 6 -> true
//  2-   5 ? 6 -> false
//  3-   5 ? 6 -> false
//  4-   5 ? 6 -> false
//  5-   10 ? 10 -> true
//  6-   10 ? 10 -> true
//  7-   10 ? 10 -> false
//  8-   10 ? 10 -> false
//  9-   10 ? 10 -> false
//  10-   123 ? '123' -> false
//  11-  123 ? '123' -> true

//1- console.log(5 != 6);
//2- console.log(5 >= 6);
//3- console.log(5 > 6);
//4- console.log("5" >= "6");
//5- console.log("10" <= 10);
//6- console.log(10 <= "10");
//7- console.log(10 < 10);
//8- console.log(10 > 10);
//9- console.log("10" != ("10"));
//10- console.log(123 < "123");
//11- console.log("123" < "123");

// 7- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

// Відповідь: 205(Тому що стрінга заражає всьо.)
















































































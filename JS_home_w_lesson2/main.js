// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який переить, до якої четвертої години потрапляє число
// ( в першу, другу, третю або четверту частину року).
// let time = +prompt('Ввести хвилину від 0 до 59');
// if (time >= 0 && time <= 14) {
//     console.log('The first quarter');
// } else if (time >= 15 && time <= 29) {
//     console.log('The second quarter');
// } else if (time >= 30 && time <=44) {
//     console.log('Third quarter');
// } else if (time >= 45 && time <= 59) {
//     console.log('Fourth quarter');
// } else {
//     console.log('Incorrectly entered words');
// }

// - У змінний день дано якесь число від 1 до 31. Потрібно змінити, у яку половину(де числокаду) відбувається це (у першому, іншому чи третьому).

// let day = +prompt('Введіть число місяця');
// if (day >= 1 && day <= 10) {
//     console.log('The first decade');
// } else if (day >= 11 && day <= 20) {
//     console.log('Second second');
// } else if (day >= 21 && day <= 31) {
//     console.log('Third decade');
// } else {
//     console.log('Incorrectly entered words');
// }

// - У нас є змінний тест, якщо не відповідає true, ви вказуєте 'Вірно', інакше вказуєте 'Вірно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипту - з коротким записом(тернаркою)
// const text = +prompt('Okten is cool');
// // if (text === true) {
// //     console.log('Вірно');
// // } else if (text !== false) {
// //     console.log('Невірно');
// // }
// if (text !== text)  console.log('true');
// else {console.log('невірно');}

// - Якщо зміна не дорівнює нулю, введіть 'Вірно', інакше введіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3

// let number = +prompt('Введіть число : 1, 0, -3');
// if (number !== 0) {
//     console.log('Вірно');
// } else {
//     console.log('Невірно');
// }
// (number !== 0) ? console.log('ВІРНО') : console.log('НЕВІРНО');

// - Скласти розклад на тиждень за домопоги switch. Користувач відображає порядковий номер тижня і на екрані відображає інформацію, заплановану на цей день.
// let dayofWeeks = +prompt('Введіть день тижня від 1 до 7');
// if (dayofWeeks === 1) {
//      console.log('ПОНЕДІЛОК: сісти на діету');
//  } else if (dayofWeeks === 2) {
//      console.log('ВІВТОРОК: піти в зал');
//  } else if (dayofWeeks === 3) {
//      console.log('СЕРЕДА: купити продукти');
//  } else if (dayofWeeks === 4) {
//      console.log('ЧЕТВЕР: заправити машину');
//  } else if (dayofWeeks === 5) {
//      console.log('ПЯТНИЦЯ: вигуляти собаку');
//  } else if (dayofWeeks === 6) {
//      console.log('СУБОТА: прибрати будинок');
//  } else if (dayofWeeks === 7) {
//      console.log('НЕДІЛЯ: відпочинок!!!');
//  } else {
//      console.log('Ти щось не то ввів');
//  }

// - Необхідний високосний рік чи ні. Високосні роки діляться націло на 4.
// let leapYear = +prompt('Введіть кількість днів у цьому році');
// if (leapYear % 2 === 0) {
//     console.log('Рік ВИСОКОСНИЙ');
// } else {
//     console.log('УРА! Наш рік нормальний');
// }
// let year = (+prompt('Введіть поточний рік') % 4 === 0) ? console.log('Рік ВИСОКОСНИЙ') : console.log('УРА! Наш рік нормальний');

// - Використовуючи конструкцію if..else, напишіть код, який запитуєме: „Як «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», щоб показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let javaScript = +prompt('Яка «офіційна» назва JavaScript?');
// if (javaScript === 'ECMAScript') {
//    alert('Правильно, гарна робота');
// } else {
//     alert('Неправильно, офіційна назва - ECMAScript!');
// }


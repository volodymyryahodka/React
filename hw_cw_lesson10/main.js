// // home_work
//
// // Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// // чтобы при клике на кнопку исчезал элемент с id="text".
// // let btn = document.getElementById('btn');
// // btn.onclick = function () {
// //     document.getElementById('text').style.display = 'none';
// // }
//
// // // -Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// // let btn = document.getElementById('btn');
// // btn.onclick = function () {
// //     this.style.display = 'none';
// // }
//
// // -створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// // При натисканні на кнопку зчитати інформацію з інпуту та перевірити
// // вік чи меньше він ніж 18, та повідомити про це користувача;
// //
// // document.getElementById('button1').onclick = function () {
// //   let age =   document.getElementById('age').value;
// //     if (!age) {
// //         alert('Ви неввели свого віку');
// //     } else if (+age < 18) {
// //         alert('Вибачте вам мало рочків');
// //     } else {
// //         alert('Вітаємо на нашому сайті.');
// //     }
// // }
//
// // -Создайте меню, которое раскрывается/сворачивается при клике
//
// // let menu = document.getElementsByClassName('menu')[0];
// // menu.onclick = function () {
// //     console.log(this.children);
// //     for (const child of this.children) {
// //         child.classList.toggle('hide');
// //
// //     }
// // };
//
// // -Создать список комментариев , пример объекта коментария -
// // {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//
// // let comments = [
// //     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// //     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// //     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// //     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// // ]
//
// // for (const comment of comments) {
// //
// //     let commentDiv = document.createElement('div');
// //     commentDiv.classList.add('comment');
// //     let title = document.createElement('h2')
// //     title.innerText = comment.title;
// //     let bodyComment = document.createElement('div');
// //     bodyComment.classList.add('body-comment');
// //     bodyComment.innerText = comments.body;
// //     let btn = document.createElement('button');
// //     btn.innerText = 'hide comment body';
// //     btn.onclick = function () {
// //         bodyComment.classList.toggle('hide-body');
// //     }
// //
// //     commentDiv.append(title, bodyComment, btn);
// //     document.body.appendChild(commentDiv);
// //
// // }
//
// //  Вывести список комментариев в документ, каждый в своем блоке.
// //  Добавьте каждому комментарию по кнопке для сворачивания его body.
// //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // створити 2 форми по 2 штуки в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація с цих 2х форм.
// // // Кнопка повинна лежати за межами форм (для перехода на другую страницу)
// // // Доступно до рекламы через Forms API. Отже дайте формі и инструкции всем необхідні атрибути.
//
//
// // Class_work_lesson10...
// //  let divOne = document.createElement('div');
// // divOne.innerText = 'Контейнер 1';
// // divOne.style.margin = '20px';
// // document.body.appendChild(divOne);
// // let divTwo = document.createElement('div');
// // divTwo.innerText = 'Контейнер 2';
// // divTwo.style.margin = '20px';
// // document.body.appendChild(divTwo);
// //
// // let formOne = document.createElement('form');
// // formOne.setAttribute('name', 'formOne');
// // divOne.appendChild(formOne);
// //
// // let formTwo = document.createElement('form');
// // formTwo.setAttribute('name', 'formTwo');
// // divTwo.appendChild(formTwo);
// //
// // let inputeOne = document.createElement('input');
// // inputeOne.setAttribute('name', 'inputeOne');
// //
// // let inputeTwo = document.createElement('input');
// // inputeTwo.setAttribute('name', 'inputeTwo');
// //
// // let inputeThree = document.createElement('input');
// // inputeThree.setAttribute('name', 'inputeThree');
// //
// // let inputeFour = document.createElement('input');
// // inputeFour.setAttribute('name', 'inputeFour');
// //
// // let button = document.createElement('button');
// // button.innerText = 'ГОРІШКАМ БОЙ';
// //
// // document.body.appendChild(button);
// //
// // formOne.append(inputeOne,inputeTwo);
// // formTwo.append(inputeThree,inputeFour);
// //
// //
// // button.addEventListener('click', function (){
// //     console.log(document.forms.formOne.inputeOne.value);
// //     console.log(document.forms.formOne.inputeTwo.value);
// //     console.log(document.forms.formTwo.inputeThree.value);
// //     console.log(document.forms.formTwo.inputeFour.value);
// // })
//
//
//
// // - Створити 3 инпута та кнопку. Один визнача количество рядков,
// // другий - количество ячек, третій вмиіст ячеєк.
// // // При натисканні кнопки, вся ця інформація зчитується і формується табличка,
// // с відповідним вмістом.
//
// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputTree = document.createElement('input');
// let button = document.createElement('button');
//
// button.innerText = 'Create a table';
// document.body.append(inputOne, inputTwo, inputTree, button);
//
// button.addEventListener('click', function () {
//     let tblLines = inputOne.value;
//     let tblCell = inputTwo.value;
//     let enterTxt = inputTree.value;
//
//     function generationTable(tblLines, tblCell, enterTxt) {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         table.style.border = '1px solid blue';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid blue';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid green';
//                 td.innerText = `${inner}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//
//     generationTable (tblLines, tblCell, enterTxt);
// })


// // - Сворити масив не цензцрних слів.
// // Сворити інпут текстового типа.
// // Якщо людина вводит слово и воно міститься в масиві не цензурних слів
//    кинути алерт з попередженням.
// // Перевірку робити при натискании на кнопку
//
//
// let mates = ['свиня', 'редиска', 'дурачок']; // тут ваш масив слів ))
    // let input = document.createElement('input');
    // let button = document.createElement('button');
    // button.innerText = 'ПЕРЕВІРКА';
    // document.body.append(input, button);
    //
    // button.addEventListener('click', function () {
    //     let valueInput = input.value;
    //
    //     for (let mate of mates) {
    //         if (mate === valueInput) {
    //             alert('Сам такий');
    //             input.value = '';
    //             return;
    //         }
    //     }
    //
    //     if (valueInput) {
    //         alert('Молодець, ти чемний!');
    //         input.value = '';
    //     }
    // });
//
//- Создать произвольный елемент с id = text.  Используя JavaScript,
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//

// let clickMe = document.getElementById('text');
// let button = document.createElement('button');
// button.innerText = 'some text';
// button.onclick = function () {
//     clickMe.style.display = 'none';
// }
// document.body.append(button);

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.createElement('button');
// button.innerText = 'click';
// button.onclick = function () {
//     button.style.display = 'none';
// }
//
// document.body.append(button);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача.

// document.getElementById('button1').onclick = function () {
//     let age = document.getElementById('age')
//     if (age) {
//         alert ('Ви не ввели дані')
//     } else if (age < 18) {
//         alert('Вибачте!,підростете приходьте!')
//     } else {
//         alert('Ми Вам раді')
//     }
// }
// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.querySelector('menu');
// let titleElement = menu.querySelector('title');
// titleElement.onclick = function () {
//     menu.classList.toggle('hidden');
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let comments = [
//     {name: 'Максим', body: 'Вчи English'},
//     {name: 'Іван', body: 'Досить сидіти, вже пізно'},
//     {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
//     {name: 'Іра', body: 'Воно, тобі треба?'},
// ];
//
// let divFather = document.createElement('div');
// for (const item of comments) {
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     let btn = document.createElement('button');
//     let hr = document.createElement('hr');
//
//     h3.innerText = item.name;
//     p.innerHTML = item.body;
//     btn.innerHTML = 'Закрий мене'
//
//     btn.onclick = () => {
//         p.style.display = 'none';
//         h3.style.display = 'none';
//     }
//     div.append(h3, p, btn);
//     divFather.append(div, hr);
// }
// document.body.appendChild(divFather);
//

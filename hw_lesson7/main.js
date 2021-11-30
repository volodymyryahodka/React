// // Home_work_lesson7
//
// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // function User (id, name, surname, email, phone) {
// //     this.id = id;
// //     this.name = name;
// //     this.surname = surname;
// //     this.email = email;
// //     this.phone = phone;
// // } let User1 = new User;
// // console.log(new User);
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// let users = [
//     new User (10, 'petya', 'shlopkin', 'das@vas', '380965111151'),
//     new User (9,'vasya', 'ruzhuy', 'jah@haj', '380965222252'),
//     new User (8,'stopa', 'nash', 'lkhjjk@kjg', '380965333353'),
//     new User (7, 'shenya', 'shpack', 'shpak@kak', '380965444454'),
//     new User (7, 'inna', 'shpack', 'sdfb@kak', '380965555556'),
//     new User (7, 'tanya', 'perdak', 'dsfbgak@kak', '380965666656'),
//     new User (7, 'shenya', 'hak', 'slknb@kak', '380965777757'),
//     new User (7, 'andriy', 'kak', 'smnvg@kak', '380965888854'),
//     new User (7, 'serj', 'noshpack', 'sstraj@kak', '380965999954'),
//     new User (7, 'ivan', 'shpack', 'nffkhk@kak', '380965344354'),
// ]
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//  users.filter(value => value % 2 === 0);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort);
// users.sort((a, b)) => a.id - b.id;
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// // створити пустий масив, наповнити його 10 об'єктами Client
// let clients = [
//     new Client(1, 'vasya', 'vvvata@afa', '380997766553',['meat'. 'milk', 'bread']),
//     new Client(1, 'petya', 'adwefbh@afa', '380995589553',['meat'.'milk', 'bread']),
//     new Client(1, 'inna', 'iinna@afa', '380997799123',['meat'.'chese', 'bread']),
// ];
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// clients.sort((a, b) => a.order.length - b.order.length);

// //Class_work_lesson7...
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// // з властивостями модель, виробник, рік випуску, максимальна швидкість,
// // об'єм двигуна. додати в об'єкт функції:
//
// function Car(mobel, producer, year, maxSpeed, value) {
//     this.model = model;
//     this.produser = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.value = value;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}` на годину);
//     };
//     this.info = function () {
//         console.log(`модель = ${this.model},виробник = ${this.produser}`);
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.maxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     this.value = function (newValue) {
//         this.value = newValue;
//     }
// }
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість}
// // на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля -
// // значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості
// // на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// // і додає його в поточний об'єкт car
// //
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель,
// // виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
// class CarClass {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     };
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed}` на годину);
//     };
//     info () {
//         console.log(`модель = ${this.model},виробник = ${this.produser}`);
//     };
//     maxSpeed () {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     value () {
//         this.value = newValue;
//     };
//     year () {
//         this.year = newValue;
//     }
// }
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість}
// // на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля
// // - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості
// // на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// // і додає його в поточний об'єкт car
// //
// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// // Створити масив з 10 попелюшок.
// class  Cinderella {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
// let cinderellas = [
//     new Cinderella('cinderella1', 23,38 ),
//     new Cinderella('cinderella2', 32,41 ),
//     new Cinderella('cinderella3', 41,39 )
// ]
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік,
// // туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.size = shoe;
//     }
// }
// let prince = new Prince('prince', 33, 43);
// let cinderella = cinderellas.find(value => value.size === prince.shoe);
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

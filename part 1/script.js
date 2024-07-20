// 1. Напишите функцию, которая принимает на вход текст приветствия 
// и имя пользователя и возвращает приветствие пользователю.
function greetUser(greeting, name) {
    return `${greeting}, ${name}!`;
}
console.log(greetUser("Привет", "Алексей"));

// 2. Напишите функцию, которая принимает на вход 3 числа, первые два складывает, 
// затем умножает на третье и возвращает результат.
function calculate(a, b, c) {
    return (a + b) * c;
}
console.log(calculate(2, 3, 4));

// 3. Напишите функцию, которая принимает на вход массив с числами и простое число
// и выводит в консоль каждый элемент массива умноженный на переданное число.
function multiplyArrayByNumber(arr, num) {
    arr.forEach(element => {
        console.log(element * num);
    });
}
multiplyArrayByNumber([1, 2, 3, 4], 2);

// 4. Напишите функцию, которая принимает на вход массив строк, 
// формирует из него одну строку и возвращает эту строку.
function joinStrings(arr) {
    return arr.join(' ');
}
console.log(joinStrings(["Hello", "world"]));

// 5. Напишите функцию, которая принимает на вход массив строк,
// формирует строку из тех элементов, длина строки которых более 3 символов.
function joinLongStrings(arr) {
    return arr.filter(str => str.length > 3).join(' ');
}
console.log(joinLongStrings(["Four", "one", "two", "is", "seven" , "a", "test"]));

// 6*. Напишите функцию, которая принимает на вход объект со свойствами fName, lName, age 
// и выводит информацию из объекта в виде строки.
function displayUserInfo(user) {
    return `Имя: ${user.fName}, Фамилия: ${user.lName}, Возраст: ${user.age}`;
}
const user = { fName: "Иван", lName: "Иванов", age: 25 };
console.log(displayUserInfo(user)); 

// 7*. Напишите функцию, которая принимает на вход массив объектов корзины покупателя со свойствами title, price, qty
// и формирует HTML разметку для отображения корзины на странице и выводит в документ.
function generateCartHTML(cart) {
    let html = '<ul>';
    cart.forEach(item => {
        html += `<li>${item.title}: ${item.qty} x ${item.price} руб.</li>`;
    });
    html += '</ul>';
    document.body.innerHTML = html;
}
const cart = [
    { title: "Яблоки", price: 50, qty: 3 },
    { title: "Бананы", price: 30, qty: 5 },
    { title: "Виноград", price: 100, qty: 2 }
];
generateCartHTML(cart);

// 8*. Напишите функцию, которая принимает на вход массив объектов корзины покупателя со свойствами title, price, qty
// и считает общую стоимость товаров по корзине.
function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
}
const cartItems = [
    { title: "Яблоки", price: 50, qty: 3 },
    { title: "Бананы", price: 30, qty: 5 },
    { title: "Виноград", price: 100, qty: 2 }
];
console.log(calculateTotal(cartItems)); 
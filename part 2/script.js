// 1. Сформируйте из объекта строку и выведите в консоль.
let student = {
  firstName: "Igor",
  lastName: "Pronkin",
  age: 34,
  phone: "8-916-341-38-35",
  city: "Moscow",
  "house number": 33,
  street: "Chertanovskaya",
};

let studentString = 
  `Имя: ${student.firstName}, 
  Фамилия: ${student.lastName}, 
  Возраст: ${student.age}, 
  Телефон: ${student.phone}, 
  Город: ${student.city}, 
  Номер дома: ${student["house number"]}, 
  Улица: ${student.street}`
;

console.log(studentString);

// 2. Сформируйте строку с разметкой HTML из объекта и выведите в документ.
let studentHTML = 
  `<div>
    <p>Имя: ${student.firstName}</p>
    <p>Фамилия: ${student.lastName}</p>
    <p>Возраст: ${student.age}</p>
    <p>Телефон: ${student.phone}</p>
    <p>Город: ${student.city}</p>
    <p>Номер дома: ${student["house number"]}</p>
    <p>Улица: ${student.street}</p>
  </div>`
;

document.body.innerHTML += studentHTML;

// 3. Выведите в консоль только имена пользователей.
let users = [
  {
    fName: "Иван",
    lName: "Иванов",
    hobbies: ["Спать", "Гулять", "Читать"],
  },
  {
    fName: "Анна",
    lName: "Иванова",
    hobbies: ["Спать", "Читать"],
  },
  {
    fName: "Ирина",
    lName: "Сидорова",
    hobbies: ["Гулять", "Читать"],
  },
];

users.forEach(user => console.log(user.fName));

// 4*. Сформируйте разметку HTML из массива пользователей и выведите в документ. Стилизуйте через CSS.
let usersHTML = 
  `<style>
    .user-card { width: 30%; border: 1px solid #ccc; padding: 10px; margin: 5px auto; }
    .user-name { font-weight: bold; }
    .user-hobbies { color: #555; }
  </style>`
;

users.forEach(user => {
  usersHTML += 
    `<div class="user-card">
      <p class="user-name">${user.fName} ${user.lName}</p>
      <p class="user-hobbies">Хобби: ${user.hobbies.join(", ")}</p>
    </div>`
  ;
});

document.body.innerHTML += usersHTML;

// 5**. Выведите все данные из массива объектов котов в документ.
let cats = [
  {
    name: "Ллойд",
    color: "Черный",
    age: 12,
    avatar: "img/1.jpg",
    owner: {
      name: "Василий",
      city: "Москва",
      phones: [333, 543, 123, 87876],
    },
  },
  {
    name: "Барсик",
    color: "Серый",
    age: 6,
    avatar: "img/2.jpg",
    owner: {
      name: "Анна",
      city: "Москва",
      phones: [523, 653, 532],
    },
  },
  {
    name: "Мурка",
    color: "Белый",
    age: 2,
    avatar: "img/4.jpg",
    owner: {
      name: "Инна",
      city: "Самара",
      phones: [187, 466, 643],
    },
  },
  {
    name: "Пусик",
    color: "Серый",
    age: 5,
    avatar: "img/3.jpg",
    owner: {
      name: "Николай",
      city: "Москва",
      phones: [345, 678, 543],
    },
  },
];

let catsHTML = 
  `<style>
    .cat-card {width: 30%; border: 1px solid #ccc; padding: 10px; margin: 5px auto; text-align: center; }
    .cat-avatar { width: 100px; height: 100px; object-fit: cover; }
  </style>
  <div class="cats">`;

cats.forEach(cat => {
  catsHTML += 
    `<div class="cat-card">
      <img src="${cat.avatar}" alt="${cat.name}" class="cat-avatar" />
      <h2>${cat.name}</h2>
      <p>Цвет: ${cat.color}</p>
      <p>Возраст: ${cat.age}</p>
      <p>Владелец: ${cat.owner.name}</p>
      <p>Город: ${cat.owner.city}</p>
      <p>Телефоны: ${cat.owner.phones.join(", ")}</p>
    </div>`
  ;
});

catsHTML += '</div>';

document.body.innerHTML += catsHTML;

// 6. Поменяйте первый и последний элемент массива местами.
let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];

let temp = fruits[0];
fruits[0] = fruits[fruits.length - 1];
fruits[fruits.length - 1] = temp;

console.log(fruits);

// 7. Получите новый массив из исходного.
let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken", "camel"];
let newPets = [...pets.slice(0, 3), pets[7], pets[8], ...pets.slice(3, 7)];

console.log(newPets);

// 8. Объедините два массива в один.
let numbers = [1, 4, 6, 3, 2, 8, 4, 3];
let animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

let combined = numbers.concat(animals);

console.log(combined);
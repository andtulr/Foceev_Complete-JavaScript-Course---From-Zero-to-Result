
/*
let h = document.querySelector(".header");
//console.log(h);
console.dir(h.firstChild)
console.log(h.firstChild)
// console.dir(h)
/*let l = document.querySelectorAll(".nav__item");
console.log(l);
let dE = document.documentElement
console.log(dE)
console.dir(dE)
console.dir(document.head)
let navList = document.querySelector(".nav__list")
console.log(navList.childNodes);
let navList = document.querySelector(".nav__list").childNodes
console.log(navList)

let navItems = document.querySelectorAll("li");
console.log(navItems);
console.log(navItems[1]);
console.log(navItems.length);

let elem = document.querySelector("h1");
console.log(elem.innerHTML);
elem.innerHTML = "Hello Irina" // Hello Andrei - Hello Irina

'use strict'

let h1He = document.querySelector("h1");
let h2He = document.createElement("h2");

h2He.innerHTML = "Доброе утро";
h1He.before(h2He);
console.log(h2He);

let h1He = document.querySelector("h1");
h1He.insertAdjacentHTML("beforeend", "<p>Some text</p>");


'use strict'

/*const square1 = document.querySelector(".box_1"); //обратится к элементу (тэгу)
console.log(square1.style) 
// creation обработчика событий --события разные
square1.addEventListener("click", function() { // ИМЯПЕР.addEventListener("обработчика событий", Функциональное выражение(){}) онанимные функции
    square1.style.backgroundColor = "red"; //click - замена цвета Функциональное выражение() - инструкция что должно происходить с нашим квадратом ПР: замена стиля
    square1.nextElementSibling.after(square1); // выбор соседнего элемента -- после него вставим наш ЭЛ.
    square1.classList.add("newStyle"); // el+свойство--.classList-- +метод--.add--(что добавляет--новый класс)
});    
//Возможно прописование функции отдельно --- вставить имя функции 
function nF() {
    square1.classList.add("newStyle"); 
}

const square1 = document.querySelector(".box_1"); //обратится к элементу (тэгу)
square1.addEventListener("click", nF) // без () --- () браузер запустит функцию автоматически

Возможно прописование стрелочной функции
const square1 = document.querySelector(".box_1");
    square1.addEventListener("mouseenter", () =>{
        square1.classList.add("newStyle");
    })


// добавление audio
"use strict"
const square1 = document.querySelector(".box_1");
const audio = new Audio("audio/Mountain Audio - Menu Click.mp3"); // получение аудиодорожки-- new Audio--ключивые слова --("путь к файлу")
square1.addEventListener("click", () => {
    audio.play(); //использование методов ПР: .play() -- проигрование "click", -- при нажатии
// Методы работы элемента Audio - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
} )
добавление к нескольким элементам методом перебора при помощи цикла --for-of--(получает только значение каждого свойства массива) 


"use strict"

const audio = new Audio("audio/Mountain Audio - Menu Click.mp3");
const squares = document.querySelectorAll(".boxes__box"); // получение всех элементов ПР:по классу(".boxes__box")--псевдо массив коллекция 
for (let value of squares) { // создание переменной--let value--+--of--ключевое слово+псевдо массив {какието действия} 
    value.addEventListener("click", () => { // ПЕР. добавляем обработчик событий(обработчик событий, функция)
        audio.play();
        value.classList.add("newStyle");
    });  
}
//цыкл for пройдет по каждому элементу псевдо массива+назачит обработчик события по клику будет делать что прописано в теле функции 

*/









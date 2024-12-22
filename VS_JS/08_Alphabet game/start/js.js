"use strict";
/*
ЗАДАЧА:
Создайте игру "Собери алфавит"

ПОДСКАЗКИ:

1-Не думайте о сокращении кода. Если будет очень много повторений однотипного кода - это нормально. Первая задача понимать логику языка, а только после оптимизировать его.
2-Помните про методы переноса элемента из одного места в другое(before, after и т.д.)
3-Помните про свойства, получения соседних элементов (previousElementSibling, previousElementSibling и т.д)


==== Раскрытое решение =====
const leterA = document.querySelector(".box_a");
const leterB = document.querySelector(".box_b");
const leterC = document.querySelector(".box_c");
const leterD = document.querySelector(".box_d");
const leterE = document.querySelector(".box_e");
const leterF = document.querySelector(".box_f");

leterA.addEventListener("click", function() { //обработчик событий.addEventListener на "click"
    leterA.previousElementSibling.before(leterA); // св-воЭЛ.(ПЕР.)_.previousElementSibling-предыдущий ЭЛ._Метод.before-перед_(leterA)-выбор перемещающего элемента
});
==== добавлена расширенное перемещение ====
leterA.addEventListener("click", function() {
    if (leterA.previousElementSibling != null) {       // если предыдущий ЭЛ.существует-!= null
        leterA.previousElementSibling.before(leterA); // то ЭЛ.перемещается по клику пред прдыдущем ЭЛ.
    } else if (leterA.nextElementSibling != null) {  // иначе если следующий ЭЛ.существует-!= null
        leterA.nextElementSibling.after(leterA);    // то ЭЛ.перемещается по клику после следующего ЭЛ.
    }
});
============================================
leterB.addEventListener("click", function() { 
    leterB.previousElementSibling.before(leterB); 
});
leterC.addEventListener("click", function() { 
    leterC.previousElementSibling.before(leterC); 
});
leterD.addEventListener("click", function() { 
    leterD.previousElementSibling.before(leterD); 
});
leterE.addEventListener("click", function() { 
    leterE.previousElementSibling.before(leterE);
});
leterF.addEventListener("click", function() { 
    leterF.previousElementSibling.before(leterF); 
});

==== Решение через перебор ЭЛ. цикл-FOR-компактная версия ==== 
*/
const leters = document.querySelectorAll(".boxes__box");// создание псевдо колекции_вызов-document.querySelectorAll_по классу(".boxes__box")
// добавление звуковых эффектов
const audioClick = new Audio("audio/Mountain Audio - Menu Click.mp3"); // вызов аудио через конструктор-new Audio_прописать путь
const audioWin = new Audio("audio/huge win.wav");
// создание ПЕР.для записи перемещающихся ЭЛ. в псевдо массиве
let newLeters;

for (let i = 0; i < leters.length; i++) { // условие:начальные координаты цикла-i = 0;_пока(i < leters.length;-i меньше длины псевдоМассива-.length-свойство)_что делать на каждой итерации(i++-увелечение на 1)
    leters[i].addEventListener("click", function() {                 // обработчик события на каждый ЭЛ.[i] псевдо массива по порядку
        if (leters[i].previousElementSibling != null) {            // если предыдущий ЭЛ.существует-!= null
            leters[i].previousElementSibling.before(leters[i]);   // то ЭЛ.перемещается по клику пред прдыдущем ЭЛ.
            audioClick.play();                                   // добавление в каждое ветвление-audioClick+его меод.play()
            newLeters = document.querySelectorAll(".boxes__box");  // вызов псевдо массива_передача в переменную-в которой будут записоваться новые значения ЭЛ.                               
        } else if (leters[i].nextElementSibling != null) {     // иначе если следующий ЭЛ.существует-!= null
            leters[i].nextElementSibling.after(leters[i]);    // то ЭЛ.перемещается по клику после следующего ЭЛ.
            audioClick.play();
            newLeters = document.querySelectorAll(".boxes__box");                               // добавление в каждое ветвление-audioClick+его меод.play() 
        }
        if (
            newLeters[0].classList.contains("box_a") &&
            newLeters[1].classList.contains("box_b") &&
            newLeters[2].classList.contains("box_c") &&
            newLeters[3].classList.contains("box_d") &&
            newLeters[4].classList.contains("box_e") &&
            newLeters[5].classList.contains("box_f") 
        ) {     
            audioWin.play();
        }
    });
}





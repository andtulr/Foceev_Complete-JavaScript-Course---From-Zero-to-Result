"use strict";

///////////////////////
/* 
ЗАДАЧА:
Создайте функционал для открытия модальных окон.


ПОДСКАЗКА:
1-Не забывайте про свойство classList с помощью которого можно манипулировать классами HTML элементов
2-При добавлении класса .hidden к любому элементу, он исчезнет, при удалении этого класса, он появится
3-Не забудьте про то, что закрыть модальное окно можно как с помощью кнопки-крестика, в верхнем правом углу модального окна, так и с помощью нажатия на любое место "Оверлей"
*/
const btnOpenMod = document.querySelectorAll(".show-modal"); // кнопки для включения всех модальных окон(псевдо колекция)
const modWin = document.querySelector(".modal"); // модальное окно выходящее
const btnCloseMod = document.querySelector(".close-modal"); // крестик на модальном окне
const overlay = document.querySelector(".overlay"); //затемненный, размытый все окно.overlay(CSS) 
// класс .hidden со значением { display: none; } т.е. ЭЛ. не отображается необходимо удалить-окно отобразиться
for (let value of btnOpenMod) { // перебирание псевдокол. при помощи for-of====в let value-вкладываются все значения каждого ЭЛ. из псевдоКол.
    value.addEventListener("click", function () { // назначаем событие"click"-для запуска функции-совершает действие над нашими классами 
        overlay.classList.toggle("hidden"); // у classList есть метод .toggle(удаляет или добавляет несуществующий класс)
        modWin.classList.toggle("hidden");
    }); // при нажатие кн.отобразилось окно
}
// далее(при нажатие на крестик небходимо мод.окно закрыть)
btnCloseMod.addEventListener("click", function() { // назначаем событие"click"-для запуска функции-совершает действие
    overlay.classList.toggle("hidden"); // у classList есть метод .toggle(добавляет несуществующий класс или удаляет)
    modWin.classList.toggle("hidden"); // добавляем(возвращаем)класс"hidden"к элементам-display: none;-ЭЛ.не отображаются
})
// далее(при нажатие на свободное место на оне небходимо мод.окно закрыть)
overlay.addEventListener("click", function() { // назначаем событие"click"-для запуска функции-совершает действие
    overlay.classList.toggle("hidden"); // у classList есть метод .toggle(добавляет несуществующий класс или удаляет)
    modWin.classList.toggle("hidden"); // добавляем(возвращаем)класс"hidden"к элементам-display: none;-ЭЛ.не отображаются
})
// создании клавиши для закрытия мод.окна
document.addEventListener("keydown", function(event) { // создания события при нажатие кнопки
    if (event.key == "Escape" && !modWin.classList.contains("hidden")) {
        overlay.classList.toggle("hidden");
        modWin.classList.toggle("hidden");
    }

})                           




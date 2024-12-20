"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/

let sN = Math.trunc(Math.random() * 20) + 1; // Math.trunc-округление рондомного числа(Math.random()-получение РЧ*20)
//console.log(sN)
let scor = 20; // счёт 20
const disMes = function(message) {
    document.querySelector(".message").textContent = message // вызываем класс .message - к свойсву textContent - присваеваем параметр значение функции(message)
}
// Логика - 1) Кнопка"Проверка"-запускает"Начните угадывать"
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);  // вызываем класс (".quess").value-знечение--поле для ввода вводим значение.Выводит строку-переводим в цифру-Number()или+
    if (!guess) {
        //document.querySelector(".message").textContent = "Вы не ввели число!";
        disMes("Вы не ввели число!");
    }else if (guess === sN) {
        disMes("Вы победили!");
        document.querySelector("body").style.background = "green";
        document.querySelector(".number").textContent = guess;
    }else if (guess !== sN) {
        
    }
    
    
});
































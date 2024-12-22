"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/

let sN = Math.trunc(Math.random() * 20) + 1; // Math.trunc-округление рондомного числа(Math.random()-получение РЧ*20)
//console.log(sN)
let score = 20; // счёт 20
let hS = 0;
const disMes = function(message) { // при определённом действие в окне "проверка" - меняется текст
    document.querySelector(".message").textContent = message // вызываем класс .message - к свойсву textContent - присваеваем параметр значение функции(message)
}
// Логика - 1) Кнопка"Проверка"-запускает"Начните угадывать"
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);  // вызываем класс (".quess").value-знечение--поле для ввода вводим значение.Выводит строку-переводим в цифру-Number()или+
    
    if (!guess) {
        // document.querySelector(".message").textContent = "Вы не ввели число!";
        disMes("Вы не ввели число!");
        }else if (guess === sN) { // при совподение чисел - действия ниже
            disMes("Вы победили!");
            document.querySelector("body").style.background = "green";
            document.querySelector(".number").textContent = guess;
            if(score > hS) {
                hS = score
                document.querySelector(".highscore").textContent = hS;
            }

    }else if (guess !== sN) { // не равен 
        if(score > 1) {
            if(guess > sN) {
                disMes("Число больше");
                score--;
                document.querySelector(".score").textContent = score;  
            } else if (guess < sN) {
                disMes("Число меньше");
                score--;
                document.querySelector(".score").textContent = score;
            } 
              
        } else {
            disMes("Вы проиграли!");
            document.querySelector(".score").textContent = 0;
        }
    }
    
});
// кнопка снова
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    sN = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.background = "black";
})































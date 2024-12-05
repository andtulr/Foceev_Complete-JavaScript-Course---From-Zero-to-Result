
// alert("Hello, Andrei!!!")
// console.log(Hello)

/* Переменные 
let myNumber = 10
console.log(myNumber)
LET
CONST
VAR
3 варианта объявления
переменных
Старый вариант записи - var
Новый вариант записи - let
Неизменяемая переменная - const*/

// Выражение и инструкции
/*Выражение возвращает значение   ---- 
Инструкции не возвращают значение.___
Выражения:
10
"Dima"
myName="Andrei"
console.log();
20+50
a <= b || c != b*/
/* Инструкции
управление потоком выполнения (if и eise, fhrow и т.д.)
интерации (for, while и т.д.))
объявлеения значений (var, let, const) */
/*Типы данных : восемь типов - семь примbтивных и один ссылочный:
Ссылочный : Object;
Примитивные :
    Число (Number)
    Строка(String)
    Логическое(Boolean)
    Undefined
    Null
    Symbol
    Biglnt
____________________________________________________ */   
// const myNumber = 10

// console.log(myNumber)
// console.log(typeof myNumber)
/* 9. Особенности чисел и строк
    Infinity    - бесконечность
    -Infinity
    NaN         - при ошибки
 Три вида кавычек :
    Для строк : "";''.
    Для выражения внутри строк :  `... ` (Ё-клавиша)*/
// const name = "andrei"
// console.log(`Hello ${name}`)
// console.log(`Hello ${2*2}`)
// console.log(`Hello ${name}`)
/* 11. Введение в операторы. Математические операторы + -  
Любой оператор - возвращает значение.
    let a = 2
    a = a + 5 (a += 5)
 Операторы инкремента и декремента :
    инкремента - 
        постфиксная форма - myAge++
                            myAge--
        
    декремента - 
    префиксная  форма - ++myAge
                        --myAge  */
/* 12. Как работают Операторы сравнения  ==  !=
  14. Приоритетность операторов
 ____________________________________________ 
  15. Преобразование типов данных
Три преобразования:  функции
    Строковое   String() - alert(100) - "100"
    Численное   Number() - +"100"     -  100
    Логическое  Boolean()
 _____________________________________________
 16. Стандартные объекты. Подводим итоги и повторяем.
 --------------------------------------
19. Знакомство с If Else. Условное ветвление - проверяет значение
 if(условие) {
    выполнить это
 }else{
 Выполни это условие, если if-ложно}
     ИЛИ
    if(условие) {
    }else if (другое (новое) условие){ Выполняеся - если предыдущее ложно
    }else if (другое условие){ и так далее
    }eise { Выполняется - если все прдыдущие ложно
    }
    -------------------------------------------------
20. Как работают логические операторы !  && -----
    || - (или) - вернет первое истинное значение или последнее  ПР. 1||0||2 - вернет 1; 0||2||3 - вернет 2; 0||0||0 - вернет последние.
    && - (и) - вернет первое ложное значение или последнее  ПР.1||0||2 - вернет 0; 1||3||6 - вернет последние.
    !  - (не) - приводит операнд к логическому типу true или folse. Затем возвращает противоположное значение. ПР. !true вернет folse
    ?? - (оператор нулевого слияния) - возвращает первый операнд, если он не null/umdefinder? иначе второй.
    ПР. - 
20. Как работают логические операторы  ?? -----
let height = 0 
    console.log(height || 100) - вернет 100 первое истинное
    console.log(height ?? 100) - вернет 0 первое определенное значение */
 /* 22. Как работает тернарный оператор 
 - условный оператор ? (тернарный оператор), имеет ТРИ ОПЕРАНДА 
    синтаксис - условие ? "IF"значение1 : "else"значение2;
тернарный оператор - вражение(возвращает значение)
условие проверяется и СРАЗУ в переменную возвращается значение
ПР.
const age = 10

age >= 18 ? console.log("Мне есть 18 лет и я могу вино") : console.log(" Я слишком молод. Пью сок.")

const age = 10
const drink = age >=18 ? "wine" : "Juce"
console.log(drink)
------ сравнение запись через if-else
let drink2
  if (age>=18){
    drink2 = "wine"
  }else {
    drink2 = "juce"
  }
  console.log(drink2) 
  ---- тернарный оператор в косых кавычках
 
  const age = 30

console.log(`Я люблю пить ${age>=18 ? "wine" : "juce"} `)
 ---- Несколько операторов
 
let age = prompt("Возраст?", "Введите свой вораст");
let message = (age < 3) ? "Здравствуй малыш" :
  (age < 18) ? "Привет" :
  (age < 100) ? "Здравствуйте" :
  "Какие Вы молодцы"
alert( message );
*/
 



/* ___________3. Углубление в основы Java Script. Функции и Объекты____________


----------- 1. Используйте Use Strict ---------------
 "use snrict"


 ------------ 2. Введение в функции -------------------
Функции - позволяют записать код который мы можем бистро переиспользовать.
alert() - это встроенная в JS функция
 
function myFunction(параметр, параметр, итд){
  условия
}
myFunction(значение аргументов для параметров, ) - вызов функции.() - оператор вызова функции
Функция (как и выражение) - всегда возвращает значение, есть возможность присвоить переменной это значение.

"use strict"
function calc(a, b, c) {
    return a + b - c
}
const result = calc(10, 4, 15)
console.log(result)


------------- 3. Function Expression и Function Declaration -----------
f Expression  - присваевание результата f. сразу переменной  - let sum = function(a, b) {
                сверху соэдай, после используй                  return a + b;
                                                               }
f Declaration - создай и используй в любом месте             - function sum(a, b) {
                                                                return a + b;
                                                               }


-------------- 4. Области видимости в JS ------------- 


-------------- 6. Значения по умолчанию для параметров функций -------------
function myFunction(параметр = "String", параметр = 7 + 2, итд){
  условия
}
myFunction(значение аргументов для параметров, )
                  в (параметру = возможно присвоить аргумент, параметр = прописовать выражения)


function mFn(a = "Ваше число ", b = 7 + 2) {
  console.log(a + b)
}
mFn() //Ваше число 9
mFn("Номер Вашего билета ") //Номер Вашего билета 9 


--------- 7. Что такое callBack функции ----------
Callback-функция — это функция обратного вызова.Нужна для передачи исполняемого кода в качестве аргумента другому коду, который вызывает её по завершении какого-либо действия.
confirm()- выводит модальное окно (позволяя задать вопрос?)

function ask(question, yes, no) {
  if (confirm(question)){
    yes()
  }else no()
}
--------  
function showOk(){
  alert("Спасибо за согласие")
}
function showCancel() {
  alert("Вы отменили выполнение")
}
ask("Вы согласны", showOk, showCancel)
------- funE
-------
ask("Вы согласны",function() {alert("Спасибо за согласие")}, function() {alert("Вы отменили выполнение")})
------- funE


----- 8. Как работают стрелочные функции -------
Это упрощенная запись fExpr.


_____ function Expression _________                  _________ Arrow function expressions __________
let funcExpression = function(arg1, arg2){           let funcArrow = (arg1, arg2) =>{
  return someExpression                                 return someExpression
}                                                    }  

function ask(question, yes, no) {
  if (confirm(question)){
    yes()
  }else no()
}

ask("Вы согласны",() => alert("Спасибо за согласие"), () => alert("Вы отменили выполнение"))


let sum = (a, b) => a * b
console.log(sum(5, 8))


---------------- 10. Что такое объекты ---------

 Объект - это набор свойств
                           ключ:значени
              ключ-строка : значение-любым, даже функцией или объектом
Доступ к свойствам можно получить через символ точка "." -------- "НАЗВАНИЕ ОБЪЕКТА.СВОЙСТВА"
________ПР.user.name //Имя
Присваевание нового значения ключу ----- ИМЯ.КЛЮЧ = "новое значение"
                                         CONSOLE.LOG(ИМЯ.КЛЮЧ)  //вывод "новое значение"
Добавление нового свойства(ключа) к объекту --------ИМЯ.НОВЫЙ КЛЮЧ = "новое значение"
Удаление свойства(ключа) - оператор delete ---------DELETE ИМЯ.КЛЮЧ
____ взаместо точки "." - [] квадратные скобки - ПР. ИМЯ.КЛЮЧ = значение
                                                     ИМЯ["КЛЮЧ"] = значение
[] квадратные скобки - возмохно использовать выражения                                                     

const user = {
  name: "Andrei",
  age: 53
}
console.log(user)
console.log(user.age)

user.name = "Irina"
user.age = 52
console.log(user.name, user.age)

user.sex = "female"
console.log(user.name, user.age, user.sex)

delete user.sex
console.log(user)

user["sex"] = "female"
console.log(user)

delete user["sex"]
console.log(user)

// const propertyName = "newProperty"
// user.propertyName = "propertyValue"
// console.log(user)

// const propertyName = "newProperty"
// user[propertyName] = "propertyValue"
// console.log(user)

const propertyName = "newProperty"
user[propertyName + " 2"] = "propertyValue"
console.log(user) 

'use strict'

const user = {
  name: "Andrei",
  age: 53
}

const answer = prompt("Напишите слово name или age") - вызываем prompt - просит вписать name или age - передает переменной
alert(user[answer])                                  - вызываем alert - вызывает модальное окно -обращаемся к объекту user и с помощью квадратных скобок ставим переменную [answer] (в этой переменной хранится объект) 

----------------------- 11. Вложенные свойства объектов ----------------------------

'use strict'
const user = {
  name: "Andrey",
  age: 53,
  placeOfBirth: {
    country:"Russia",
    city: "Novgorod"
  }
}
console.log(user)
user.placeOfBirth.country = "USA"       - замена значений
user.placeOfBirth["dateOfBirth"] = 1971 - добавление новый ключ: значение
delete user["placeOfBirth"].city        - удаление по ключу
console.log(user)
---------------------------- 12. Сокращенная запись свойств --------------

const firstName = "John"
const lastName = "Travolta"

const user = {
  firstName: firstName,
  lastName: lastName,
  country: "USA"
}

console.log(user) //{ firstName: 'John', lastName: 'Travolta', country: 'USA' }
*/

const firstName = "John"
const lastName = "Travolta"

const user = {
  firstName,
  lastName,
  country: "USA"
}
console.log(user) //{ firstName: 'John', lastName: 'Travolta', country: 'USA' }

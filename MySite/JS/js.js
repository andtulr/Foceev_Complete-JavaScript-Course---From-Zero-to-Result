
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

const firstName = "John"
const lastName = "Travolta"

const user = {
  firstName,
  lastName,
  country: "USA"
}
console.log(user) //{ firstName: 'John', lastName: 'Travolta', country: 'USA' }


---------------------------- 13. Создание функций в объектах и немного про this --------------
методы объектов - метод THIS 

____ Function expression ______
"user strict"

const firstName = "John"
const lastName = "Travolta"

const user = {
  firstName,
  lastName,
  birthYear: 1992,
  //calcAge: function() {
    return 2025 - user.birthYear
  }
  calcAge() {
    return 2025 - user.birthYear
  }  
}
// console.log(user) //{ firstName: 'John', lastName: 'Travolta', birthYear: 1992 }
console.log(user.calcAge())  // 33

____ Function Declaration ______

"user strict"

const firstName = "John"
const lastName = "Travolta"

function calcAge() {
  return 2025 - user.birthYear 
}
const user = {
  firstName,
  lastName,
  birthYear: 1992,
  //calcAge: calcAge
  calcAge,
}
console.log(user.calcAge()) //33

чтобы функция работала при изменение имени объекта подстовляем THIS-вместо имени
const user = {                     ------------    const userFirst = {
calcAge: function() {              --------------  calcAge: function() { 
    return 2025 - user.birthYear   --------------       return 2025 - this.birthYear
  }                                --------------  }
this - это динамический параметр 


------------------ 14. ПРАКТИКА-04. Создайте калькулятор BMI с помощью объектов ---------------------

------------------ 15. Введение в массивы -----------------------------------------------------------

Это упорядоченная коллекция данных.
В массивах мы не даем название свойств - формируются по порядку цифрами с 0 и записывается в [].
Ссылочный тип - ARRAY массив.


'use strict'
const userObject = {
  firstName: "Andrei",
  age:53,
}
console.log(userObject) //{ firstName: 'Andrei', age: 53 }

const userArr = ["Andrei", 53,]
console.log(userArr) // [ 'Andrei', 53 ]
console.log(userArr[1]) // 53 ____ доступ к элементу в массиве - через порядковый номер
userArr[3] = "Tulashkin" // доб. элеменов - по номеру
console.log(userArr) // [ 'Andrei', 53, <1 empty item>, 'Tulashkin' ]

// доступ к последниму элМас (3)-Tulashkin или методМас.- .at
console.log(userArr[userArr.length - 1])
console.log(userArr.at(-1)) //Tulashkin


------------------ 16. Методы массивов -----------------------------------------------------------

--------------4 метода добавления и удаления
Добавление элемента в конец массива .PUSH
_____const userArr = ["Andrei", 53,]
_____userArr.push("male")
_____console.log(userArr) //[ 'Andrei', 53, 'male' ]
_____console.log(userArr.push("male")) //4
_____console.log(userArr) //[ 'Andrei', 53, 'male', 'male' ]

Добавление элемента в начало массива .UNSHIFT
_____const userArr = ["Andrei", 53,]
_____userArr.push("male")
_____userArr.unshift(10)
_____console.log(userArr) //[ 10, 'Andrei', 53, 'male' ]

Удаление последнего элемента массива .POP
_____const userArr = ["Andrei", 53,]
_____userArr.push("male")
_____userArr.unshift(10) //[ 10, 'Andrei', 53, 'male' ]
_____userArr.pop() 
_____console.log(userArr) //[ 10, 'Andrei', 53 ]
_____console.log(userArr.pop()) //53
_____console.log(userArr) //[ 10, 'Andrei' ]

Удаление первого элемента массива .SHIFT
_____const userArr = ["Andrei", 53,]
_____userArr.push("male")
_____userArr.unshift(10) //[ 10, 'Andrei', 53, 'male' ]
_____userArr.pop() 
_____console.log(userArr) //[ 10, 'Andrei', 53 ]
_____userArr.shift()
_____console.log(userArr) //[ 'Andrei', 53 ]

const userArr = ["Andrei", 53, "male", "Tver"]
console.log(userArr) //[ 'Andrei', 53, 'male', 'Tver' ]
delete userArr[1]
console.log(userArr) //[ 'Andrei', <1 empty item>, 'male', 'Tver' ]

-------------- Метод точечного добавления и удаления
Метод splice - 
               удалить элемент
const userArr = ["Andrei", 53, "male", "Tver"]
console.log(userArr) //[ 'Andrei', 53, 'male', 'Tver' ]
userArr.splice(1, 1)
console.log(userArr) //[ 'Andrei', 'male', 'Tver' ]

               добавить элементы в конкретное место массива без удаления
const userArr = ["Andrei", 53, "male", "Tver"]
console.log(userArr) //[ 'Andrei', 53, 'male', 'Tver' ]
userArr.splice(1, 2, "femali", "Tulashkin")
console.log(userArr)  //[ 'Andrei', 'femali', 'Tulashkin', 'Tver' ]

               возвращает массив удаленных элементов
const userArr = ["Andrei", 53, "male", "Tver"]
console.log(userArr) //[ 'Andrei', 53, 'male', 'Tver' ]
const dataFromUserArr = userArr.splice(1, 2)
console.log(userArr) //[ 'Andrei', 'Tver' ]
console.log(dataFromUserArr) //[ 53, 'male' ]


-------------- Методы работы с данными массива
Метод arr.includes() - конкретный элемент в массиве (возвращает булевое значение true_____false) 
const userArr = ["Andrei", 53, "male", "Tver"]
console.log(userArr) //[ 'Andrei', 53, 'male', 'Tver' ]
console.log(userArr.includes("male")) //true
console.log(userArr.includes(30)) //false           
               
Метод arr.indexOf()  - индекс определенного элемента в массиве ( значение в массиве есть - возвращает число индекса
                                                                 значения нет            - возвращает  -1          )
const userArr = ["Andrei", 53, "male", "Tver"]
console.log(userArr) //[ 'Andrei', 53, 'male', 'Tver' ]
console.log(userArr.indexOf("male")) //2
console.log(userArr.indexOf(50)) //-1


------------------ 17. Введение в цикл for -----------------------------------------------------------
___________Циклы нужны, когда необходимо повторить какое либо действие много раз, если условие верно
FOR (ПЕРЕМЕННАЯ начало цикла;УСЛОВИЕ ЦИКЛА проверка условия;ШАГ ЦИКЛА который будет выполняться после каждой итерации)
for (let i = 1; i <= 10; i++) {
  console.log("Это сообщение появилось в консоле 10 раз") // 10 раз появилось 
}
for (let i = 1; i <= 10; i++) {
  console.log(`Это сообщение появилось в консоле ${i} раз`) // Это сообщение появилось в консоле 1 раз - в консоле 10 раз
}


'use strict'

for (let i = 1; i <= 10; i++) {
  if (i <= 4 && i > 1) {
    console.log(`Это сообщение появилось в консоле ${i} раза`)
  } else console.log(`Это сообщение появилось в консоле ${i} раз`)
}
'use strict'

const arr = [
  "Andrei",
  "Tulashkin",
  2055 - 1971,
  "Tver",
  true,
  ["Алла", "Peter", "Ivan"]
]
console.log(arr) /*[
  'Andrei',
  'Tulashkin',
  84,
  'Tver',
  true,
  [ 'Алла', 'Peter', 'Ivan' ]
]
for (let i = 0; i < 6; i++) {  // for (let = 0; i < arr.length; i++) - не зависимо от длины массива
  console.log(arr[i])/* Andrei
                        Tulashkin
                        84
                        Tver
                        true
                        [ 'Алла', 'Peter', 'Ivan' ] 
}
const arr2 = [] //
for (let i = 0; i < arr.length; i++) {
  console.log(typeof arr[i]) /*string
                               string
                               number
                               string
                               boolean
                               object 
  arr2.push(typeof arr[i])                             
}
console.log(arr2) // [ 'string', 'string', 'number', 'string', 'boolean', 'object' ] 

------------------ 18. Break & Continue в циклах For -----------------------------------------------------------

continue - Используется при проверке условия внутри цикла. Если условие true переходит к следующей итерации, пропуская инструкции текущей итерации.
'use strict'

const arr = [
  "Andrei",
  "Tulashkin",
  2055 - 1971,
  "Tver",
  true,
  ["Алла", "Peter", "Ivan"]
]

for (let i = 0; i < arr.length; i++) {
  if(typeof arr[i] !== "string") continue
  console.log(arr[i]) /*Andrei
                        Tulashkin
                        Tver 

}

break    - Используется при проверке условия внутри цикла. Если условие true полностью прерывает цикл и выходит из него.

'use strict'

const arr = [
  "Andrei",
  "Tulashkin",
  2055 - 1971,
  "Tver",
  true,
  ["Алла", "Peter", "Ivan"]
]

for (let i = 0; i < arr.length; i++) {
  if(typeof arr[i] === "number") break
  console.log(arr[i]) /*Andrei
                        Tulashkin

}

------------------ 19. Цикл While Do While -----------------------------------------------------------

цикл WHILE - Берет внешнюю переменную и проверяет ее на правдивость по условию в скобках.
Если true выполняет код в фигурных скобках
let i = 1
while(i <= 10) {
  console.log(`Строка выводится в консоль ${i} раз`) // Это сообщение появилось в консоле 1 раз - в консоле 10 раз
  i++
}
цикла do WHILE - Выполни действия в фигурных скобках хотя бы раз, даже, если условие ложно.
let i = 100
do {
    console.log(`Строка выводится в консоль ${i} раз`) //Строка выводится в консоль 100 раз
    i++
} while(i <= 10)

Цикл While может добиться того же результата, что и цикл for.
_______________Что использовать?
Если в коде не определено количество итераций и оно, например, генерируется, автоматически, 
то используем while, если определено, то for.
Если в цикле нужно использовать прерывание, break или continue, то используем for.
WHILE(УСЛОВИЕ ЦИКЛА)
*/
'use strict'
let someNumder = Math.floor(Math.random() * 10);
console.log(someNumder); //9.66841755039379 - 9




























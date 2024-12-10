/*
________________________________ 4. Основы работы с DOM ______________________________________
----------------------------------------------------------------------------------------------
-------------------------------- 1. Prettier и как работают сниппеты. ------------------------

-------------------------------- 2. Что такое DOM и Окружение JS. ------------------------

-------------------------------- 3. Получение HTML Элементов ------------------------
---- доступ через метод .querySelector
document.querySelector(".____") - по классу
document.querySelector("#____") - по ID
document.querySelector(".list .list__item") - первый на странице дочерний элемент, элемента под классом .list
let h = document.querySelector(".header");
console.log(h) //<h1 class="header">Hello Andrei</h1>
---- доступ через метод . querySelectorAll
let l = document.querySelectorAll(".nav__item");
console.log(l);
// NodeList(3) [li.nav__item, li.nav__item, li.nav__item]
0: li.nav__item
1: li.nav__item
2: li.nav__item
length: 3
[[Prototype]]: NodeList

------------- дополнительные методы получения доступа к элементам ---------
 document.getElementById("id"); - Возвращает элемент
 document.getElementsByClassName('test') - Возвращают коллекцию
 document.getElementsByTagName("li") - Возвращают коллекцию

-------------------------------- 4. Что такое HTML узлы и родство элементов ------------------------
каждый узел которого является объектом документа
Получение узлов дерева DOM - 
document.querySelector(".ИМЯ").childNodes
Для получения узлов есть 6 свойств в объекте любого тега - 
1)childNodes - коллекция (псевдо-массив) содержит список всех детей, включая текстовые узлы и комментарии
2)firstChild - обеспечивает доступ к первому дочернему узлу
3)lastChild  - обеспечивают доступ к последнему дочернему узлу
4)nextSibling - обеспечивают доступ к следующему соседнему узлу
5)previousSibling - обеспечивают доступ к предыдущему соседнему узлу
6)parentNode - обеспечивают доступ к родительскому узлу

-------------------------------- 5. Что такое псевдомассив ------------------------
У псевдомассива нет свойств и методов.
псевдомассив - массив (встроенный метод: Array.from())
let navItems = document.querySelectorAll("li") - доступ через метод .querySelector по тэгу
console.log(navItems) - NodeList(3) [li.nav__item, li.nav__item, li.nav__item] - трт тэга (0, 1, 2) с клвссами
console.log(navItems[1]) - к первому.
Array - Массив
NodeList - псевдоМассив

-------------------------------- 6. Как работают циклы for(для) of(из) и for in(в) ------------------------
let arr = [ 1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(i); - ЦИКЛ for
}
for.. of - со значением в массивах и псевдомассивах;
for.. in - с ключами в объектах, массивах,псевдомассивах;
for (let key in ИМЯ) {
    console.log(key); // выводим ключи
    console.log(ИМЯ[key]); // выводим значение
}

-------------------------------- 7. Получение и изменение содержимого тегов ------------------------

Свойства для получения и изменения тегов :
 elem.innerHTML - получает и изменяет содержимое тега
 let elem = document.querySelector("h1");
console.log(elem.innerHTML);
elem.innerHTML = "Hello Irina" // Hello Andrei - Hello Irina
 elem.textContent - получает и изменяет только текст внутри тегов
 elem.outerHTML - получает и изменяет сам тег вместе с его содержимым
 elem.data - получает и изменяет содержимое узла




*/












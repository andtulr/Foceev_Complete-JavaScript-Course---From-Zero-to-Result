
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

*/
'use strict'

let h1He = document.querySelector("h1");
h1He.insertAdjacentHTML("beforeend", "<p>Some text</p>");





















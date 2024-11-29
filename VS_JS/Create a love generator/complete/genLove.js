
// console.log(firstName)
/* Math.random - генерирует случайные числа --- добавить множитель Пример: *100
  Math.floor   - округляет числа в меньшую до целого
  1) Две переменные  c promt -->
  2) сгенерируем число = переменная 
  3) функция alert  результат совместимости имен в выражение косые кв.   */ 


  /*const firstName = prompt("Напишите первое имя", "Моё Имя")
const secondName = prompt("Напишите второе имя", "Моё Имя")
const randomNumber = (Math.floor(Math.random() * 100))

alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber}`)*/


/*------------19. Знакомство с If Else. Условное ветвление --------------
const firstName = prompt("Напишите первое имя", "Моё Имя")
const secondName = prompt("Напишите второе имя", "Моё Имя")
const randomNumber = (Math.floor(Math.random() * 100))
if (randomNumber < 33) {
  alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Вам необходимо поискать человека с другим именем`) 
} else if (randomNumber >= 33 && randomNumber < 66 ){
  alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Совместимость хорошая, но может быть и лучше`)
} else if (randomNumber >= 66 ) {
  alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Вы идеально подходите друг другу`)
} else {
  alert ("Упс ... Какое-то странное число получилось. Попробуйте ещё раз.")
}
*/

/*-------20. Как работают логические операторы !  &&-------- 
const firstName = prompt("Напишите первое имя", "Моё Имя")
const secondName = prompt("Напишите второе имя", "Моё Имя")
const randomNumber = (Math.floor(Math.random() * 100))

if (randomNumber < 33 && firstName !=null && secondName !=null) {
  alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Вам необходимо поискать человека с другим именем`) 
} else if (randomNumber >= 33 && randomNumber < 66 && firstName !=null && secondName !=null ){
  alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Совместимость хорошая, но может быть и лучше`)
} else if (randomNumber >= 66 && firstName !=null && secondName !=null) {
  alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Вы идеально подходите друг другу`)
} else {
  alert ("Упс ... Вы не ввели имя. Попробуйте ещё раз.")
}*/

/*------- вывод не равен пустой строке -------- 
const firstName = prompt("Напишите первое имя", "Моё Имя")
const secondName = prompt("Напишите второе имя", "Моё Имя")
const randomNumber = (Math.floor(Math.random() * 100))

if (randomNumber < 33 && firstName !=null && secondName !=null && firstName !="" && secondName !="" ) {
  alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Вам необходимо поискать человека с другим именем`) 
} else if (randomNumber >= 33 && randomNumber < 66 && firstName !=null && secondName !=null && firstName !="" && secondName !="" ){
  alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Совместимость хорошая, но может быть и лучше`)
} else if (randomNumber >= 66 && firstName !=null && secondName !=null && firstName !="" && secondName !="" ) {
  alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Вы идеально подходите друг другу`)
} else {
  alert ("Упс ... Вы не ввели имя. Попробуйте ещё раз.")
}
*/



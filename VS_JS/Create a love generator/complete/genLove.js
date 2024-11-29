
// console.log(firstName)
/* Math.random - генерирует случайные числа --- добавить множитель Пример: *100
  Math.floor   - округляет числа в меньшую до целого
  1) Две переменные  c promt -->
  2) сгенерируем число = переменная 
  3) функция alert  результат совместимости имен в выражение косые кв.   */ 
const firstName = prompt("Напишите первое имя", "Моё Имя")
const secondName = prompt("Напишите второе имя", "Моё Имя")
const randomNumber = (Math.floor(Math.random() * 100))

alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber}`)
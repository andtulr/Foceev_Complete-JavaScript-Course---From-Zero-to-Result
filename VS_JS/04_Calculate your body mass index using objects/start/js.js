/* 

ЗАДАЧА:

1. - Вам нужно создать калькулятор индекса массы тела(BMI), с помощью объектов. 
2. - Индекс массы тела рассчитывается по формуле: вес в Кг / Рост в квадрате.

Например, масса человека = 74 кг, рост = 172 см. Следовательно, индекс массы тела в этом случае равен:
ИМТ = 74кг / 1,722м² ≈ 25,01 кг/м²
------------------------------------------------
3. - Для каждого из сравниваемых людей, создайте объект со свойствами которые будут содержать их имя, массу тела и рост.
const piter = {                       const denis = {
    name: "Piter",                        name: "Denis",
    mass:72,                              mass:82,
    height:1.88                           height:1.73
}                                     }
------------------------------------------------    
4. - Создайте метод в объекте который будет считать индекс массы тела(2. - Индекс массы тела рассчитывается по формуле: вес в Кг / Рост в квадрате.
) и возвращать результат (return) ---------- function calcBmi() {
                                                  return piter.mass / (piter.height ** 2)
                                             }
далее вставляем ФУН. в объект
5. Сравните индексы массы тел двух людей (данные ниже), и выведите в консоль результат. 
Например: Индекс массы тела Петра (28.1), больше индекса массы тела Дениса (24.3)!.

ДАННЫЕ:

    Петр: Вес: 72кг рост: 1.88м
    Денис: Вес: 82кг рост: 1.73м

ПОДСКАЗКА:

1. - В качестве метода можете использовать как Function Declaration, так и Fancrion Expression.
2. - Не забывайте про сокращенную запись свойств.
3. - Не забывайте про метод this.

*/
/*------------------- РЕШЕНИЕ ----------------
функция создавала новое свойство в объектах - значение был результат выражения

function calcBmi() {
    // return piter.mass / (piter.height ** 2) или более динамически
    return this.mass / (this.height ** 2)
}
const piter = {
    name: "Piter",
    mass:72,
    height:1.88,
    // calcBmi: calcBmi
    calcBmi
}
const denis = {
    name: "Denis",
    mass:82,
    height:1.73,
    calcBmi
}
console.log(piter.calcBmi())   // 20.37120869171571
console.log(denis.calcBmi())   // 27.39817568244846

-----функция создавала новое свойство в объектах - значение был результат выражения -----

*/
function calcBmi() {
    this.bmiRes /*создание нового свойства */ = this.mass / (this.height ** 2) // присваевание значений
    return this.bmiRes 
}
const piter = {
    name: "Piter",
    mass:72,
    height:1.88,
    // calcBmi: calcBmi
    calcBmi
}
const denis = {
    name: "Denis",
    mass:82,
    height:1.73,
    calcBmi
}
piter.calcBmi() // функция сработала - надо запустить
denis.calcBmi() // обращаемся к функции через объект   имя объекта.имя функции()

console.log(piter) 
/*
{
    name: 'Piter',
    mass: 72,
    height: 1.88,
    calcBmi: [Function: calcBmi],
    bmiRes: 20.37120869171571
}*/
console.log(denis)
/*
{
  name: 'Denis',
  mass: 82,
  height: 1.73,
  calcBmi: [Function: calcBmi],
  bmiRes: 27.39817568244846
}
 */

console.log(piter.bmiRes) // 20.37120869171571
console.log(denis.bmiRes) // 27.39817568244846

if (piter.bmiRes > denis.bmiRes) {
    console.log(`Индекс массы тела ${piter.name} - (${piter.bmiRes}), больше чем у ${denis.name} - (${denis.bmiRes})`)
} else if (piter.bmiRes < denis.bmiRes) {
    console.log(`Индекс массы тела ${denis.name} - (${denis.bmiRes}), больше чем у ${piter.name} - (${piter.bmiRes})`)
}else {
    console.log("Произошла ошибка. Попробуйте еще раз.")
}
// Индекс массы тела Denis - (27.39817568244846), больше чем у Piter - (20.37120869171571)

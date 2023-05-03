/*TODO: Перетворення на рядок. Відбувається, коли ми щось виводимо. Може бути виконане за допомогою String(value)
Очевидно false стає "false", null стає "null" тощо.
*/
let value = true;
console.log(typeof value); // boolean

value = String(value); // тепер value - це рядок "true"
console.log(typeof value); // string

/*TODO: Перетворення на число.
Перетворення на числа відбувається в математичних функціях і виразах автоматично.
Наприклад, коли ділення / застосовується до не-чисел:
*/
console.log("6" / "2"); // 3, рядки перетворюються на числа

//Ми можемо використовувати функцію Number(value) для явного перетворення value на число:
let str = "123";
console.log(typeof str); // string

let num = Number(str); // стає числом 123
console.log(typeof num); // number

/*TODO: Перетворення на булевий тип.
Значення, які інтуїтивно “порожні”, такі як 0, порожній рядок, null, undefined та NaN, стають false.
Інші значення стають true.
*/
console.log(Boolean(1)); // true 
console.log(Boolean(0)); // false
console.log(Boolean("вітаю")); // true
console.log(Boolean("")); // false
//NOTE
alert( Boolean("0") ); // true, бо "0" є true
alert( Boolean(" ") ); // пробіли, також true (будь-які непусті рядки є true)
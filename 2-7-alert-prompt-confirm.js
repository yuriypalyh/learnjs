//TODO: alert
//показує повідомлення.

//TODO: prompt
//Виклик prompt повертає текст із поля введення(result) або null, якщо введення було скасовано.
let age = prompt('Скільки вам років?', 100);
alert(`Вам ${age} років!`); // Вам 100 років!

//TODO: confirm
/*
Функція confirm показує модальне вікно з питанням question та двома кнопками: ОК та Скасувати.
Результат: true, якщо натиснути кнопку OK, інакше — false.
*/
let isBoss = confirm("Ви бос?");
alert( isBoss ); // true, якщо натиснута OK

//TODO: ex
let superUserName = prompt("Як вас звати?", "");
alert(superUserName);

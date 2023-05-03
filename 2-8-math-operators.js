//Базові оператори, математика
/*TODO: Терміни: “унарний”, “бінарний”, “операнд”
Операнд – це те, до чого застосовуються оператори. 
Наприклад, у множенні 5 * 2 є два операнди: лівий операнд 5 і правий операнд 2. 
Іноді їх ще називають “аргументами”.
*/

//Оператор є унарним, якщо він має один операнд. Наприклад, унарне заперечення - змінює знак числа:
let x = 1;
x = -x;
console.log(x); // -1, було застосоване унарне заперечення

/*Оператор є бінарним, якщо він має два операнди. 
Наприклад, оператор мінус можна використовувати і у бінарній формі:*/
let i = 1, u = 3;
console.log(u - i); // 2, бінарний мінус віднімає значення

/*TODO: Математика
JavaScript підтримує такі математичні операції:
Додавання +,
Віднімання -,
Множення *,
Ділення /,
Остача від ділення %,
Піднесення до степеня **.
Перші чотири операції зрозумілі, а от про % та ** потрібно сказати декілька слів.
*/
//% Остача.  Результатом a % b є остача цілочислового ділення a на b.
console.log( 5 % 2 ); // 1 — остача від ділення 5 на 2
console.log( 8 % 3 ); // 2 — остача від ділення 8 на 3
//** Піднесення до степеня. Оператор піднесення до степеня a ** b множить a саме на себе b разів. У школі ми записуємо це як a^b.
console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8

/*TODO: Об’єднання рядків через бінарний +
Зазвичай оператор плюс + додає числа.
Але якщо бінарний + застосовується до рядків, він об’єднує їх:
*/
let s = 'мій_' + 'рядок';
console.log(s); // мій_рядок
//NOTE: Зверніть увагу, якщо будь-який з операндів є рядком, тоді інший також перетворюється на рядок.
console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
console.log(2 + 2 + '1' ); // "41", а не "221"

//Ось приклад, як працює віднімання й ділення:
console.log( 6 - '2' ); // 4, '2' перетворюється на число
console.log( '6' / '2' ); // 3, обидва операнди перетворюються на числа

/*TODO: Числове перетворення, унарний +
У оператора плюс + є дві форми: бінарна, яку ми використовували вище, та унарна.
Унарний плюс або, іншими словами, оператор плюс +, застосований до одного операнда, нічого не зробить, якщо операнд є числом. 
Але якщо операнд не є числом, унарний плюс перетворить його на число.
Наприклад:
*/
// Нема ніякого впливу на числа
let x_num = 1;
console.log(+x_num); // 1

let y_num = -2;
console.log(+y_num); // -2

// Перетворює нечислові значення
console.log(+true); // 1
console.log(+"");   // 0

//Необхідність перетворення рядків на числа виникає дуже часто. Бінарний плюс додав би їх як рядки:
let apples = "2";
let oranges = "3";
console.log( apples + oranges ); // "23", бінарний плюс об’єднує рядки

//FIXME: Якщо ми хочемо використовувати їх як числа, нам потрібно конвертувати, а потім підсумувати їх:
let applesS = "2";
let orangesS = "3";
// обидва значення перетворюються на числа перед застосуванням бінарного плюса
alert( +apples + +oranges ); // 5
// довший варіант
// alert( Number(apples) + Number(oranges) ); // 5
/*
З погляду математика надмірні плюси можуть здатися дивними. 
Але з погляду програміста тут немає нічого особливого: 
спочатку застосовуються унарні плюси, 
вони перетворюють рядки на числа, 
а потім бінарний плюс підсумовує їх.

Чому унарні плюси застосовуються до значень перед бінарними плюсами? 
Як ми побачимо далі, це пов’язано з їхнім вищим пріоритетом.
*/

/*TODO: Пріоритет оператора
Дужки перевизначають будь-який пріоритет, тому, якщо ми не задоволені типовим пріоритетом, 
ми можемо використовувати дужки, щоби змінити його. Наприклад: (1 + 2) * 2.
Якщо JS пріоритет є однаковим, порядок виконання — зліва направо.
15 унарний плюс +
15 унарний мінус -
14 піднесення до степеня **
13 множення	*
13 ділення	/
12 додавання	+
12 віднімання	-
2 присвоєння	=
*/

/*TODO: Присвоєння
Зазначимо, що присвоєння = також є оператором. Воно є у таблиці з пріоритетами й має дуже низький пріоритет 2.

Тому, коли ми присвоюємо значення змінній, наприклад, x = 2 * 2 + 1, 
спочатку виконуються обчислення, а потім виконується присвоєння = зі збереженням результату в x.
*/
let qq = 2 * 2 + 1;
console.log(qq); // 5

/*Виклик x = значення записує значення у x, а потім повертає його. Однак, будь ласка, не пишіть свій код так. 
Ці трюки, безумовно, не роблять код більш зрозумілим або читабельним.*/
let aa = 1;
let bb = 2;
let cc = 3 - (aa = bb + 1);
console.log(aa); // 3
console.log(cc); // 0

/*TODO: Оператор “модифікувати та присвоїти”. Часто нам потрібно застосувати оператор до змінної й зберегти новий результат у ту ж саму змінну.
Наприклад:*/
let m = 2;
m = m + 5;
m = m * 2;
//Цей запис можна скоротити за допомогою операторів += та *=:
let n = 2;
n += 5; // тепер n = 7 (те ж саме, що n = n + 5)
n *= 2; // тепер n = 14 (те ж саме, що n = n * 2)
console.log(n); // 14

/*TODO: Інкремент/декремент
Інкремент ++ збільшує змінну на 1:*/
let counter = 2;
counter++;        // працює так само, як counter = counter + 1, але запис коротше
alert( counter ); // 3

//Декремент -- зменшує змінну на 1:
let counter2 = 2;
counter--;        // працює так само, як counter = counter - 1, але запис коротше
alert( counter2 ); // 1

/*FIXME: Оператори ++ та -- можуть розташовуватися до або після змінної.
Коли оператор йде за змінною, він у “постфіксній формі”: counter++.
“Префіксна форма” – це коли оператор йде попереду змінної: ++counter.
Префіксна форма повертає нове значення, тоді як постфіксна форма повертає старе значення (до збільшення/зменшення).
*/
let counterAdsd = 1;
let adsd = ++counter; // (*)
alert(adsd); // 2
//Постфіксна
let counterSs = 1;
let a = counterSs++; // (*) змінили ++counter на counter++
alert(a); // 1
//Якщо ми хочемо збільшити значення та негайно використати результат оператора, нам потрібна префіксна форма:
let counterDd = 0;
alert(++counterDd); // 1
//Якщо ми хочемо збільшити значення, але використати його попереднє значення, нам потрібна постфіксна форма:
let counterQq = 0;
alert(counterQq++); // 0

/*TODO: Побітові оператори
Список операторів:
AND(і) (&)
OR(або) (|)
XOR(побітове виключне або) (^)
NOT(ні) (~)
LEFT SHIFT(зсув ліворуч) (<<)
RIGHT SHIFT(зсув праворуч) (>>)
ZERO-FILL RIGHT SHIFT(зсув праворуч із заповненням нулями) (>>>)
*/

/*TODO: Кома
Оператор кома дає змогу обчислити кілька виразів, розділивши їх комою ,. Кожен із них обчислюється, але повертається тільки результат останнього.*/
let someExample = (1 + 2, 3 + 4);
alert(someExample); // 7 (результат обчислення 3 + 4)

//FIXME: Example:
let one = 1, two = 1;
let ccc = ++one; // ?
let ddd = two++; // ?
/*Answer:
one = 2
two = 2
ccc = 2
ddd = 1
*/
/*
let one = 1, two = 1;

alert(++one); // 2, префіксна форма повертає нове значення
alert(two++); // 1, постфіксна форма повертає старе значення

alert(one); // 2, збільшується один раз
alert(two); // 2, збільшується один раз
*/
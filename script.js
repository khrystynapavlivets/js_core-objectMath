// Завдання 1.

// Напишіть функцію getArea(number), яка обчислює площу круга.
//  Для визначення площі використовуйте Math.
//  В залежності від того що передали в функцію має виводити наступні повідомлення:

// Якщо передане число повертати - Площа дорівнює стільки то квадратних одиниць.
// Якщо передали не число - Повинно бути числове значення.
// Якщо в функцію нічого не передали - Будь ласка, введіть радіус!
// ------------------------------------------------------------------------------------------

// function getArea(number) {
//   if (typeof number === "string") {
//     return "Повинно бути числове значення.";
//   }
//   if (number <= 0) {
//     return "Радіус має бути більше за 0.";
//   }
//   if (!number) {
//     return "Будь ласка, введіть радіус.";
//   }
//   let S = 1;
//   S = Math.PI * Math.pow(number, 2);
//   return   `Площа дорівнює ${S.toFixed(2)} квадратних одиниць.`;
// }

// console.log(getArea(3));//Обчислює площу круга.
// console.log(getArea());//Будь ласка, введіть радіус!
// console.log(getArea(-5));//Радіус має бути більше за 0.
// console.log(getArea(9));//Обчислює площу круга.
// console.log(getArea(0));//Радіус має бути більше за 0.
// console.log(getArea('9'));//Повинно бути числове значення.
// console.log(getArea('radius'));//Повинно бути числове значення.

// Завдання 2.

// Напишіть функцію getSqrt(number), яка вираховує корінь квадратний.
// Для визначення кореня використовуйте Math.
// В залежності від того що передали в функцію має виводити наступні повідомлення:

// Якщо передане число повертати - Квадратний корінь з стільки то дорівнює стільки то.
// Якщо передали не число - Повинно бути числове значення.
// Якщо число менше 0 - Введіть додатнє число.
// Якщо в функцію нічого не передали - Будь ласка, введіть число!
// ------------------------------------------------------------------------------------------

// function getSqrt(number) {
//     if (number === undefined) {
//         return "Будь ласка, введіть число!";
//     } else if (typeof number !== "number") {
//         return "Повинно бути числове значення.";
//     } else if (number < 0) {
//         return "Введіть додатнє число.";
//     } else {
//         return `Квадратний корінь з числа ${number} дорівнює  ${Math.sqrt(number).toFixed(2)}`;
//     }
// }
// console.log(getSqrt(4)); //Квадратний корінь з 4 дорівнює  2
// console.log(getSqrt(7)); //Квадратний корінь з 4 дорівнює  2
// console.log(getSqrt(0)); //Квадратний корінь з 0 дорівнює  0
// getSqrt(-4); //Введіть додатнє число.
// getSqrt("sqrt"); //Повинно бути числове значення.
// getSqrt(); //Будь ласка, введіть число!










// Завдання 3.

// Створіть об’єкт MyMath який буде реалізовувати наступний функціонал:

// MyMath.PI – це властивість яка має повертати число Pi.
// MyMath.pow(number, degree) – це метод який має повертати число в певній степені.
// MyMath.abs(number) – це метод який має повертати модулю числа.
// MyMath.max(number1, number2…) – це метод який має повернути максимальне число з переданих.
//  Кількість чисел необмежена.
// MyMath.min(number1, number2…) – це метод який має поаернути мінімальне число з переданих.
//  Кількість чисел необмежена.
// Також ви маєте повернути наступні повідомлення при використанні методів, якщо:
// Якщо передали не число - Повинно бути числове значення.
// Якщо в функцію нічого не передали - Будь ласка, введіть число або числа(в залежності від методу)!
// При створенні цих методів використання об’єкту Math заборонене!

// ------------------------------------------------------------------------------------------



let MyMath = {
    PI: 3.141592653589793,
    pow: function (number, degree) {
        if (!number) {
            return "Будь ласка, введіть число.";
        }
        if (typeof number === "string" || typeof degree === "string") {
            return "Повинно бути числове значення.";
        }
        return `Число ${number} в ${degree} степені  є число ${number ** degree}`;
    },
    abs: function (number) {
        if (!number) {
            return "Будь ласка, введіть число.";
        }
        if (typeof number === "string") {
            return "Повинно бути числове значення.";
        }
        return `Модуль числа ${number} є число ${number < 0 ? -number : number}`;

    },

    max: function () {
        if (arguments.length === 0) {
            return "Будь ласка, введіть число або числа!";
        }
        let maxNum = arguments[0];
        for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] !== "number") {
                return "Повинно бути числове значення.";
            }
            if (arguments[i] > maxNum) {
                maxNum = arguments[i];
            }
        }
        return `Максимальне число - ${maxNum}`;
    },


    min: function () {
        if (arguments.length === 0) {
            return "Будь ласка, введіть число або числа!";
        }
        let minNum = arguments[0];
        for (let i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] !== "number") {
                return "Повинно бути числове значення.";
            }
            if (arguments[i] < minNum) {
                minNum = arguments[i];
            }
        }
        return `Мінімальне число - ${minNum}`;
    }
}

console.log(MyMath.PI.toFixed(2))

console.log(MyMath.pow(3, 2));
console.log(MyMath.pow("3", 2));
console.log(MyMath.pow());

console.log(MyMath.abs(3));
console.log(MyMath.abs(- 2));
console.log(MyMath.abs('4'));
console.log(MyMath.abs());

console.log(MyMath.max(5, 44, 4432, -4, 0, -23232.7));
console.log(MyMath.max(5, '44', 4432, -4, 0, -23232.7));
console.log(MyMath.max());

console.log(MyMath.min(5, 44, 4432, -4, 0, -23232.7));
console.log(MyMath.min(5, '44', 4432, -4, 0, -23232.7));
console.log(MyMath.min());





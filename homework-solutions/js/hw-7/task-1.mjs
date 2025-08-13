/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...array) {
return array.flat();
}
let variable = mergeArrays([1,2], [3,4], [5,6]);
console.log(variable);

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */

function devideBy(sentence) {
  const words = sentence.trim().split(/\s+/);
  let result = '';
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (i > 0) {
      word = word[0].toUpperCase() + word.slice(1);
      result += '_';
    }
    result += word;
  }
  return result;
}
console.log(devideBy('I am super engineer'));

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let f1 = 0;
  let f2 = 1;
  for (let i = 2; i <= n; i++){
    let f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
  }
  return f2;
}
console.log(fibonacci(8));

export { mergeArrays, fibonacci, devideBy };

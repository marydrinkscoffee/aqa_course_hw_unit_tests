// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). 
// Функция принимaют на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]


type fnMapCallback<T, U> = (element: T, index: number, array: T[]) => U;
function fnMap<T, U>(arr: T[], callback: fnMapCallback<T, U>): U[] {
    let result: U[] = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
};
console.log(fnMap([1, 2, 3, 4, 5], (item, index) => item * index),);




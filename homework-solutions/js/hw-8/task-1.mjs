
//Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:

const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

//   1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
let forEach = [];
numbers.forEach((item, index, array) => {
   if (item % 3 === 0) {
      forEach.push(item);
   }
});

//   2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива
//      // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
let map;
map = numbers.map((item, index, array) => item - array.length);

//   3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
//      // [8, 30, 85, 95, 94]
let filter = [];
filter = numbers.filter((item, index, array) => item > array[index -1]);

//   4. find - присвойте элемент, равный своему индексу //2
let find = [];
find = numbers.find((item, index, array) => item === index);


//   5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
//      // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
let sort = [...numbers].sort((a, b) => a - b);

//   6. reduce - получите сумму всех чисел массива //466
let reduce = numbers.reduce((accumulator, element) => accumulator + element, 0);

//   7. some - проверьте, есть ли в массиве элементы больше 90 //true
let some = numbers.some((element) => element > 90);

//   8. every - проверьте, что все элементы массива двухзначные //false
let every = numbers.every((element) => element.length === 2);

export { forEach, map, filter, find, sort, reduce, some, every };

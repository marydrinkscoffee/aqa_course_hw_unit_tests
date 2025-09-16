// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
// его резолва в консоль
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
// Обработайте промис методом .catch и выведите результат его резолва в консоль
// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
// в консоль результаты работы каждого промиса через .then
// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
// в консоль статус и результат каждого промиса через .then
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

//1
function delayTwoSeconds(fn) {
    setTimeout(() => fn(), 2000);
  }
  delayTwoSeconds(() => {console.log('2 sec delayed message')});
  
  //2
  const promise1 = new Promise((resolve, reject) => {
    resolve(1);
  });
  
  promise1.then((number) => {
    console.log(number);
  });
  
  //3
  const promise2 = new Promise((resolve, reject) => {
    reject('Promise failed');
  });
  
  promise2.catch((error) => {
    console.error(error);
  });
  
  //4
  function promiseNumber(number) {
    return new Promise((resolve, reject) => {
      resolve(number);
      });
  }
  
  promiseNumber(1).then((number) => {
    console.log(number);
  });
  
  //5
  Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((numbers) => {
    console.log(numbers);
  });
  
  //6
  Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((numbers) => {
    console.log(numbers);
  });
  
  //7.1
  async function promiseAll() {
    try {
      const numbers = await Promise.all([
        promiseNumber(111),
        promiseNumber(222),
        promiseNumber(3333),
        ]);
        console.log(numbers);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    promiseAll();
  
   //7.2
    async function promiseAllSettled() {
      try {
      const numbers = await Promise.allSettled([
          promiseNumber(1), 
          promiseNumber(2), 
          promiseNumber(3),
      ]);
        console.log(numbers);
      } catch(error) {
        console.error('Error:', error);
      }
    }
  promiseAllSettled();







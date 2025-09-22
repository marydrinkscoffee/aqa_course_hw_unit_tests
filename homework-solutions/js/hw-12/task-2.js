// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Проверьте, что айди в респонсе === 201
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo({ userId, title }) {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify({
           userId,
           title,
         }),
    });
      if (response.status !== 201) {
        throw new Error(`Error: status is ${response.status}. Expected status is 201`);
      }
      const result = await response.json();
      if (result.id !== 201) {
        throw new Error('Error: ID is not 201');
      }
      return result;
    } catch (error) {
       console.log('Error:', error.message);
    } finally {
      console.log('The function has completed');
    }
  }
  createTodo({ userId: 1, title: 'test' }).then((result) => console.log(result));
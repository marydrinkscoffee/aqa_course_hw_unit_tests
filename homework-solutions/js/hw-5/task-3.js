/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
let vowelCount = 0;
let consonantCount = 0;
for (let a of word) {
  if (/[aeiouAEIOU]/.test(a)) {
    vowelCount++;
  } else {
    consonantCount++;
  }
}
vowelsAndConsonantsResult = `${word} contains ${vowelCount} vowels and ${consonantCount} consonants`;
console.log(vowelsAndConsonantsResult);

//export { vowelsAndConsonantsResult };

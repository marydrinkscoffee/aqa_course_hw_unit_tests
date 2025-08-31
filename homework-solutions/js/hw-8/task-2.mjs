/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  return wordsArr.toSorted((a, b) => 
    a.toLowerCase().split("").filter(char => "aeiou".includes(char)).length -
    b.toLowerCase().split("").filter(char => "aeiou".includes(char)).length
  );
}

// function countedVowels(word) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   return word
//   .toLowerCase()
//   .split("")
//   .filter(char => vowels.includes(char))
//   .length;
// }

// function sortedByVowels(wordsArr) {
// return wordsArr.toSorted((a, b) => countedVowels(a) - countedVowels(b));
// }

export { sortedByVowels };

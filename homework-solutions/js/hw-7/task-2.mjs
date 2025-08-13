/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
if (typeof word !== 'string') {
    return false;
  }
const compareWord = word.toLowerCase();
return compareWord === compareWord.split('').reverse().join('');
}
console.log(isPalindrom("madam"));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
if (typeof sentence !== 'string') {
    return [];
}
if (sentence === '') {
  return [];
}
const sepWords = sentence.split(' ');
let maxLength = 0;
for (let i = 0; i < sepWords.length; i++) {
  if (sepWords[i].length > maxLength) {
    maxLength = sepWords[i].length;
    }
  }
  const longestWords = [];
  for (let i = 0; i < sepWords.length; i++) {
    if (sepWords[i].length === maxLength) {
      longestWords.push(sepWords[i]);
    }
  }
  return longestWords;
}
console.log(findLongestWords('I am super engineer hahahaha'));
export { isPalindrom, findLongestWords };

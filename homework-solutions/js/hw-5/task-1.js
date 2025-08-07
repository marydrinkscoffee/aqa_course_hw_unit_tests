/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */
 
// let evenNumbersResult = '';
// for (let a = 10; a >= 0; a -= 2){
//     if (evenNumbersResult !== ''){
//         evenNumbersResult += '-';
//     }
//     evenNumbersResult += a;
// }
// console.log(evenNumbersResult)
 
let evenNumbersResult = '';
for (let a = 10; a >= 0; a--){
    if (a % 2 === 0){
        if (evenNumbersResult !== ''){
        evenNumbersResult += '-';
    }
        evenNumbersResult += a;
}
}
console.log(evenNumbersResult)
 
/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */
 
let smilePatternResult = '';
for (let a = 1; a <= 5; a++) {
    for (let b = 0; b < a; b++) {
        smilePatternResult += ":)";
    }
    if (a < 5) {
        smilePatternResult += "\n";
    }
}
console.log(smilePatternResult);
 
/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
 
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';
replaceSpacesWithOneResult = text.replace(/ /g, '1');
console.log(replaceSpacesWithOneResult)
 
// const text = 'Hello! I am a JS student!';
// let replaceSpacesWithOneResult = '';
// let textspace = ' ';
// let newsymbol = '1';
// replaceSpacesWithOneResult = text.replace(new RegExp(textspace, 'g'), newsymbol);
// console.log(replaceSpacesWithOneResult);
 
 
//export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

let minAge = 18, maxAge = 60;
let age = "19h";
if (typeof age !== "number" && typeof age !== "string") {
    console.log("Incorrect data type");
} else {
    if (typeof age === "string") {
        age = Number(age);
    }
    if (age !== age) {
        console.log("Incorrect data type");
    } else if (age < minAge) {
        console.log("You don't have access because your age is", age, ". It's less than", minAge);
    } else if (age >= minAge && age < maxAge) {
        console.log("Welcome!");
    } else if (age > maxAge) {
        console.log("Keep calm and watch the Culture channel");
    } else {
        console.log("Technical work");
    }
}
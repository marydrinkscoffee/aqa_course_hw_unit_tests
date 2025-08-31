const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];
// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//Объект должен иметь поля name (string) и age (number)
function addCharacter(character) {
  if (!character || typeof character.name !== 'string' || typeof character.age !== 'number'){
    throw new Error('Invalid data');
  }
     characters.push(character);
  }

//  2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени
// // getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }

function getCharacter(name) {
  return characters.find(searchName => searchName.name === name);
}

//  3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей 
// НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
function getCharactersByAge(minAge) {
    if (typeof minAge !== 'number') {
    throw new Error('Invalid data');
  }
  return characters.filter(character => character.age >= minAge);
}

//  4. Напишите функцию updateCharacter(name, newCharacter). 
// (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
function updateCharacter(name, newCharacter) {
  const character = getCharacter(name);
  if (!character) {
    throw new Error('Invalid name');
}
  character.name = newCharacter.name;
  character.age = newCharacter.age;
  return character;
}

//  5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
function removeCharacter(name) {
  const index = characters.findIndex(character => character.name === name);
  if (index === -1) {
    throw new Error('Character not found');
  }
  characters.splice(index, 1);
  return characters;
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };

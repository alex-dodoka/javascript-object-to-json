let leader = {
    name: "Василий Иванович",
    age: 35
};
let jsonString = JSON.stringify(leader);
console.log(`Вот это обычный объект:"cмотри ниже..."`);
console.log(leader);
console.log(`Вот это преобразованный в JSON объект: ${jsonString} .`);
let backToObj = JSON.parse(jsonString);
console.log(`И вновь у нас обычный объект: "смотри ниже..."`);
console.log(backToObj);
console.log(`Знакомтесь! Это ${leader.name} и ему ${leader.age} лет.`);
//  У нас есть массив объектов, представляющих разных людей в наших списках контактов.

//  Функция lookUpProfile, которая принимает имя и свойство(prop) в качестве аргументов, была предварительно написана для вас.

//# Функция должна проверить, является ли name именем фактического контакта, а данное свойство(prop) является свойством этого контакта.

//# Если оба значения равны true, то верните "значение" этого свойства.

//# Если имя не соответствует ни одному контакту, то верните строку No such contact.

//# Если prop не соответствует ни одному допустимому свойству контакта, найденному для соответствия имени, то верните строку No such property.



const contacts = [
   {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
   },
   {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
   },
   {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
   },
];

function lookUpProfile(name, prop) {

   let arr = contacts.find(el => el.firstName === name)

   if (!arr) {
      return 'No such contact'
   }
   if (!arr.hasOwnProperty(prop)) {
      return "No such property"
   }
   if (arr && arr.hasOwnProperty(prop)) {
      return arr[prop]
   }

}

lookUpProfile("Bob", "likes")
lookUpProfile("Akira", "patato")
lookUpProfile("Sherlock", "likes")
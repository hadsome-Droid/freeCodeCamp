//todo                     Finders Keepers

//* Создайте функцию, которая просматривает массив arr и возвращает 
//* первый элемент в нем, который проходит "проверку на истинность".
//* Это означает, что для данного элемента x "тест на истинность" пройден,
//* если функция(x) имеет значение true.Если ни один элемент
//* не проходит проверку, верните undefined.

function findElement(arr, func) {

   for (let el of arr) {

      if (func(el)) {
         return console.log(el)
      }

   }
   return console.log(undefined);
}

findElement([1, 2, 3, 4], num => num % 2 === 0)
findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; })
findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; })
//todo                       Chunky Monkey


//* Напишите функцию, которая разбивает массив(первый аргумент) на 
//* группы по длине размера(второй аргумент) и возвращает
//* их в виде двумерного массива.


function chunkArrayInGroups(arr, size) {
   let arrSize = arr.length / size
   let resultArr = []
   let count = 0

   for (let i = 0; i < arrSize; i++) {
      let someArr = []
      resultArr.push(someArr)

      for (let j = 0; j < size; j++) {

         if (count < arr.length) {
            someArr.push(arr[count])
            count++
         }
      }
   }

   return resultArr;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))
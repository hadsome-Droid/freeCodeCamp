//todo              Find the Longest Word in a String

//# Возвращает длину самого длинного слова в предоставленном предложении.
//# Вашим ответом должно быть число.

function findLongestWordLength(str) {
   let a = str.split(' ')
   let max = a[0].length
   for (let i = 0; i < a.length; i++) {
      if (a[i].length > max) {
         max = a[i].length
      }
   }
   return console.log(max);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
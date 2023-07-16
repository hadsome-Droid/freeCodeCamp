//todo                   Truncate a String

//* Усеките строку(первый аргумент), если она длиннее заданной максимальной
//*  длины строки(второй аргумент).Возвращает усеченную строку с
//*   помощью a ...окончание.

function truncateString(str, num) {
   let truncate = str.slice(str.length + num.length, num)

   if (str.length > num) {
      return console.log(`${truncate}...`)
   }
   return console.log(truncate)
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", 8)
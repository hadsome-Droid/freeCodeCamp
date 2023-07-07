
let counter = 0

function cc(card) {

   let sum = ''

   switch (card) {
      case "A":
      case "J":
      case "Q":
      case "K":
      case 10:
         counter--
         break
      case 9:
      case 8:
      case 7:
         counter = counter
         break
      case 6:
      case 5:
      case 4:
      case 3:
      case 2:
         counter++
         break
   }

   if (counter === 5) {
      sum = "5 Bet"
   } else if (counter === 0) {
      sum = "0 Hold"
   } else if (counter === -5) {
      sum = "-5 Hold"
   } else if (counter === -1) {
      sum = "-1 Hold"
   } else if (counter === 1) {
      sum = "1 Bet"
   }

   return sum
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
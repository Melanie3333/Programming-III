let LivingCreature = require('./LivingCreature');

module.exports = class Buyser extends LivingCreature {
   mul() {
      this.multiply++; 
      if (this.multiply >= 8) {     
      let emptyCells = super.chooseCell(0)
      let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
      
      if (newCell && GrassEaterArr.length == 0) {
         let x = newCell[0]
         let y = newCell[1]
         matrix[y][x] = 8
         BuyserArr.push(new Grass(x, y, 5))
         this.multiply = 0;
     }

      }
   }
 
 } 
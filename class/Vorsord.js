let LivingCreature = require('./LivingCreature')

module.exports = class Vorsord extends LivingCreature {
    constructor(x, y, index) {
       super(x, y, index);
       this.energy = 16;
    }
 
move() {
	var emptyCells = super.chooseCell(0);
	var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
 
       if (newCell) {
          var newX = newCell[0];
          var newY = newCell[1];
          matrix[newY][newX] = this.index;
 
          matrix[this.y][this.x] = 0;
 
          this.x = newX;
          this.y = newY;
 
          
       }
       this.energy--;
       if (this.energy <= 0) {
			this.die();
		}
    }

  eat() {
      var GishatichCells = super.chooseCell(3);
		var newCell = GishatichCells[Math.floor(Math.random() * GishatichCells.length)]
 
       if (newCell) {
          var newX = newCell[0];
          var newY = newCell[1];
          matrix[newY][newX] = this.index;
 
          matrix[this.y][this.x] = 0;
 
          this.x = newX;
          this.y = newY;
 
          this.energy++;
 
          for (var i in GishatichArr) {
             if (newX == GishatichArr[i].x && newY == GishatichArr[i].y) {
                GishatichArr.splice(i, 1);
             }
 
          }
          this.mul();
       } else {
          this.move()
       }
 
    }
 
    mul() {
      var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
 
       if (newCell && this.energy >= 16) {
          var newX = newCell[0];
          var newY = newCell[1];
          matrix[newY][newX] = this.index;
 
          var newVorsord = new Vorsord(newX, newY, this.index);
          VorsordArr.push(newVorsord);
       }
    }
 
    
 
   
    die() {
		matrix[this.y][this.x] = 0;
		for (var i in VorsordArr) {
			if (VorsordArr[i].x == this.x && VorsordArr[i].y == this.y) {
				VorsordArr.splice(i, 1)
			}
		}
	}
 
 }
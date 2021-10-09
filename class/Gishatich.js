let LivingCreature = require('./LivingCreature');

module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 12;
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
      var GrassEaterCells = super.chooseCell(2);
		var newCell = GrassEaterCells[Math.floor(Math.random() * GrassEaterCells.length)]
 
       if (newCell) {
          var newX = newCell[0];
          var newY = newCell[1];
          matrix[newY][newX] = this.index;
 
          matrix[this.y][this.x] = 0;
 
          this.x = newX;
          this.y = newY;
 
          this.energy++;
 
          for (var i in GrassEaterArr) {
             if (newX == GrassEaterArr[i].x && newY == GrassEaterArr[i].y) {
                GrassEaterArr.splice(i, 1);
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
 
       if (newCell && this.energy >= 12) {
          var newX = newCell[0];
          var newY = newCell[1];
          matrix[newY][newX] = this.index;
 
          var newGishatich = new Gishatich(newX, newY, this.index);
          GishatichArr.push(newGishatich);
       }
    }
 
    
 
    
    die() {
		matrix[this.y][this.x] = 0;
		for (var i in GishatichArr) {
			if (GishatichArr[i].x == this.x && GishatichArr[i].y == this.y) {
				GishatichArr.splice(i, 1)
			}
		}
	}
 
 }
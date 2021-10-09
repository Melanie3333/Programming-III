let LivingCreature = require('./LivingCreature')

module.exports = class Mijat extends LivingCreature {
	constructor(x, y, index) {
		super(x, y, index);
		this.energy = 10;
	}


	move() {
		var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY
		}

		this.energy--;
		if (this.energy <= 0) {
			this.die();
		}


	}
	eat() {
      var BuyserCells = super.chooseCell(5);
      var newCell = BuyserCells[Math.floor(Math.random() * BuyserCells.length)]

		if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			for (var i in BuyserArr) {
				if (BuyserArr[i].x == newX && BuyserArr[i].y) {
               BuyserArr.splice(i, 1);
				}
			}

			this.x = newX;
			this.y = newY;
			this.energy++;

			if (this.energy >= 8) {
				this.mul();
				this.energy = 8
			}

		}
		else {
			this.move();
		}
	}

	mul() {
		var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 2
			MijatArr.push(new Mijat(newX, newY, 2))
			this.energy = 6;
		}
		if (weath == "winter") {
			this.energy -= 4;
			this.multiply -= 4;
		}
		if (weath == "summer") {
			this.energy += 2;
			this.multiply += 2;
		}

	}

	die() {
		matrix[this.y][this.x] = 0;
		for (var i in MijatArr) {
			if (MijatArr[i].x == this.x && MijatArr[i].y == this.y) {
				MijatArr.splice(i, 1)
			}
		}
	}
}
function Player(name) {
    this.name = name;
    this.level = 1;
    this.points = 0;
  }
  
  Player.prototype.gainXP = function (amount) {
    if (amount >= 1 && amount <= 10) {
      this.points += amount;
  
      while (this.points >= 10) {
        this.points -= 10;
        this.level++;
      }
    } else {
      console.log("XP should be a number between 1 and 10.");
    }
  };
  
  Player.prototype.describe = function () {
    console.log(`${this.name} is level ${this.level} with ${this.points} experience points.`);
  };
  
  const player1 = new Player('Yankee');
  const player2 = new Player('Doodle');

  
  player1.gainXP(5);
  player2.gainXP(7);
  player1.gainXP(3);
  player2.gainXP(2);
  player1.gainXP(8);
  player2.gainXP(4);
  
  player1.describe(); 
  player2.describe(); 
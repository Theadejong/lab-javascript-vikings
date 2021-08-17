//Soldier
class Soldier {}
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking {}
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon {}
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {}
class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(viking){
     this.vikingArmy.push(viking)
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }

  vikingAttack(){
    let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
    let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
    const result = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength)
    this.saxonArmy = this.saxonArmy.filter(
      function (saxon) {
        return saxon.health > 0
      }
    )
    return result
  }

  saxonAttack(){
    let randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
    let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
    const result = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength)
    this.vikingArmy = this.vikingArmy.filter(
      function (viking) {
        return viking.health > 0
      }
    )
    return result
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`
    } else {
      return `Vikings and Saxons are still in the thick of battle.`
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
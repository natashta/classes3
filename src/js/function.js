export default class Character {
  constructor(health, attack, defence) {
    this.level = 1;
    this.health = health;
    this.attack = attack;
    this.defence = defence;
    this.powerMode = false;
    this.attackCount = 0;
  }

  doAttack() {
    if (this.attackCount === 3) {
      this.powerMode = false;
    }
    if (this.powerMode) {
      this.attackCount += 1;
    }
  }

  get powerMode() {
    return this._powerMode;
  }

  set powerMode(value) {
    if (!value) {
      this._powerMode = value;
    } else if (this.attackCount === 0) {
      this._powerMode = value;
    }
  }

  get health() {
    if (this.powerMode) {
      const health = this._health * 2;
      return health;
    }
    return this._health;
  }

  set health(health) {
    this._health = health;
  }

  get attack() {
    if (this.powerMode) {
      const attack = this._attack * 2;
      return attack;
    }
    return this._attack;
  }

  set attack(attack) {
    this._attack = attack;
  }

  get defence() {
    if (this.powerMode) {
      const defence = this._defence * 2;
      return defence;
    }
    return this._defence;
  }

  set defence(defence) {
    this._defence = defence;
  }
}

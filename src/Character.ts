import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy?: Energy;
  readonly race: Race;
  readonly archetype: Archetype;
  private _maxLifePoints: number;
  private _dexterity: number;
  private _name: string;

  constructor(
    name: string,
  ) {
    this._name = name;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this.archetype = new Mage(name);
    this.race = new Elf(name, 10);
    this._dexterity = this.race.dexterity;
    this._maxLifePoints = (this.race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this.archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy | undefined {
    if (this._energy) {
      return { ...this._energy };
    }
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    if (this.race instanceof Elf) {
      this._lifePoints = this._maxLifePoints;
      enemy.receiveDamage(this._strength + (this._lifePoints / 10));
    }
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._maxLifePoints += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    if (this._energy) {
      this._energy.amount = 10;
    }

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}
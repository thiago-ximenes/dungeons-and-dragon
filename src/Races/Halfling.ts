import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.incrementInstanceCounter();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
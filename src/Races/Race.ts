abstract class Race {
  private _name: string;
  private _dexterity: number;
  private static _instancesCount = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  protected static incrementInstanceCounter(): void {
    this._instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return this._instancesCount; 
  }

  abstract get maxLifePoints(): number;

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }
}

export default Race;
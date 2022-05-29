import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;
  private static _instancesCount = 0;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name(): string {
    return this._name;
  }

  protected static incrementInstanceCounter(): void {
    this._instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instancesCount; 
  }

  abstract get energyType(): EnergyType;

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }
}

export default Archetype;
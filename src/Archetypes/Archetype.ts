import { EnergyType } from '../Energy';

abstract class Archetype {
  protected _name: string;
  protected _special: number;
  protected _cost: number;
  private static _instancesCount = 0;
  protected _energyType: EnergyType;

  constructor(name: string, energyType: EnergyType) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
    this._energyType = energyType;
  }

  get name(): string {
    return this._name;
  }

  protected static incrementInstanceCounter(): void {
    this._instancesCount += 1;
  }

  static createdRacesInstances(): number {
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
import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energy: number;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energy = 0;
    this._energyType = 'mana';
    Necromancer.incrementInstanceCounter();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
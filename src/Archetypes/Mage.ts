import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _mana: number;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._mana = 0;
    this._energyType = 'mana';
    Mage.incrementInstanceCounter();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
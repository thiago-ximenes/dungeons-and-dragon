import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _stamina: number;
  
  constructor(name: string, stamina: number) {
    super(name, 'stamina');
    this._stamina = stamina;
    Ranger.incrementInstanceCounter();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
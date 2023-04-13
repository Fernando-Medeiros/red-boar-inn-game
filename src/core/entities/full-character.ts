import { LocalStorage } from "core/middlewares/local-storage";

import { Character } from "./character/character";
import { Status } from "./status/status";
import { Skills } from "./skills/skills";
import { Inventory } from "./inventory/inventory";
import { Equipment } from "./equipment/equipment";

import { PropsCharacter } from "./character/character.interface";
import { PropsStatus } from "./status/status.interface";
import { PropsSkills } from "./skills/skills.interface";
import { PropsEquipment } from "./equipment/equipment.interface";
import { PropsInventory } from "./inventory/inventory.interface";

function getCharacter(): FullCharacterSchema {
  return LocalStorage.getCharacter<FullCharacterSchema>();
}

export type FullCharacterSchema = {
  character: PropsCharacter;
  status: PropsStatus;
  skills: PropsSkills;
  inventory: PropsInventory;
  equipment: PropsEquipment;
};

export class FullCharacter {
  character: Character;
  status: Status;
  skills: Skills;
  inventory: Inventory;
  equipment: Equipment;

  constructor() {
    const { character, status, skills, inventory, equipment } = getCharacter();

    this.character = new Character(character);
    this.status = new Status(status);
    this.skills = new Skills(skills);
    this.inventory = new Inventory(inventory);
    this.equipment = new Equipment(equipment);
  }
}

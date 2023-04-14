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

export class ManagerCharacter {
  public static character(): Character {
    const { character } = getCharacter();

    return new Character(character);
  }

  public static status(): Status {
    const { status } = getCharacter();

    return new Status(status);
  }

  public static skills(): Skills {
    const { skills } = getCharacter();

    return new Skills(skills);
  }

  public static inventory(): Inventory {
    const { inventory } = getCharacter();

    return new Inventory(inventory);
  }

  public static equipment(): Equipment {
    const { equipment } = getCharacter();

    return new Equipment(equipment);
  }
}

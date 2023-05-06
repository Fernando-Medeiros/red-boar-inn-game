import type { Armor, Weapon, Accessory } from "core/schemas/items.schema";

export type PropsEquipment = {
  head: Armor | object;
  body: Armor | object;
  leg: Armor | object;
  handLeft: Weapon | object;
  handRight: Weapon | object;
  accessoryLeft: Accessory | object;
  accessoryRight: Accessory | object;
};

import type {
  Armor,
  Accessory,
  Weapon,
  Consumable,
  Material,
} from "./items.schema";

export type PropsInventory = {
  armors: Armor[];
  accessories: Accessory[];
  consumables: Consumable[];
  materials: Material[];
  weapons: Weapon[];
};

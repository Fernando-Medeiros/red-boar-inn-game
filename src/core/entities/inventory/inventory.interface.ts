import type {
  Armor,
  Accessory,
  Weapon,
  Consumable,
  Material,
} from "core/schemas/items.schema";

export interface IInventory {
  get getArmors(): Armor[];
  set setArmor(item: Armor);
  get getAccessories(): Accessory[];
  set setAccessory(item: Accessory);
  get getWeapons(): Weapon[];
  set setWeapon(item: Weapon);
  get getConsumables(): Consumable[];
  set setConsumable(item: Consumable);
  get getMaterials(): Material[];
  set setMaterial(item: Material);

  findArmor(name: string): Armor | undefined;
  findAccessory(name: string): Accessory | undefined;
  findConsumable(name: string): Consumable | undefined;
  findMaterial(name: string): Material | undefined;
  findWeapon(name: string): Weapon | undefined;

  toJson(): PropsInventory;
}

export type PropsInventory = {
  armors: Armor[];
  accessories: Accessory[];
  consumables: Consumable[];
  materials: Material[];
  weapons: Weapon[];
};

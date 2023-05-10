import type { ArmorProps } from "../items/armor-props";
import type { WeaponProps } from "../items/weapon-props";
import type { AccessoryProps } from "../items/accessory-props";
import type { ConsumableProps } from "../items/consumable-props";
import type { MaterialProps } from "../items/material-props";

export type InventoryProps = {
  armors: ArmorProps[];
  accessories: AccessoryProps[];
  consumables: ConsumableProps[];
  materials: MaterialProps[];
  weapons: WeaponProps[];
};

import type { Armor, Weapon, Accessory } from "../items.interface";

export interface IEquipment {
  get getHead(): Armor | object;
  set setHead(value: Armor);
  get getBody(): Armor | object;
  set setBody(value: Armor);
  get getLeg(): Armor | object;
  set setLeg(value: Armor);
  get getHandLeft(): Weapon | object;
  set setHandLeft(value: Weapon);
  get getHandRight(): Weapon | object;
  set setHandRight(value: Weapon);
  get getAccessoryLeft(): Accessory | object;
  set setAccessoryLeft(value: Accessory);
  get getAccessoryRight(): Accessory | object;
  set setAccessoryRight(value: Accessory);
  toJson(): PropsEquipment;
}

export type PropsEquipment = {
  head: Armor | object;
  body: Armor | object;
  leg: Armor | object;
  handLeft: Weapon | object;
  handRight: Weapon | object;
  accessoryLeft: Accessory | object;
  accessoryRight: Accessory | object;
};

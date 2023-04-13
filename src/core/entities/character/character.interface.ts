export interface ICharacter {
  get getPubId(): string;
  get getLevel(): number;
  set setLevel(level: number);
  get getName(): string;
  set setName(name: string);
  get getClass(): string;
  set setClass(className: string);
  get getCreatedAt(): object;
  toJson(): PropsCharacter;
}

export type PropsCharacter = {
  pubId: string;
  level: number;
  charName: string;
  className: string;
  createdAt?: object;
};

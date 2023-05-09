export type CharacterCreateSchema = {
  charName: string;
};

export type CharacterUpdateSchema = {
  charName?: string;
  className?: string;
  level?: number;
  genders?: string;
};

import { CharacterService } from "core/api/character-service";
import { EquipmentService } from "core/api/equipment-service";
import { InventoryService } from "core/api/inventory-service";
import { StatusService } from "core/api/status-service";
import { SkillsService } from "core/api/skills-service";
import { Helpers } from "core/helpers/functions-helpers";
import SetupRandomNames from "setup/page.login.names.json";

export class CharacterDependencies {
  static async create() {
    const defaultName =
      Helpers.random(SetupRandomNames.names) +
      Helpers.random(["Tyr", "Nyx", "Pan"]);

    await Promise.all([
      CharacterService.create({ charName: defaultName }),
      EquipmentService.create(),
      InventoryService.create(),
      StatusService.create(),
      SkillsService.create(),
    ]);
  }
}

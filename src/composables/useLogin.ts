import type { LoginSchema } from "core/services/schemas/auth-schemas";
import { SessionStorage } from "core/storage/session-storage";
import { SessionService } from "core/services/session-service";
import { CharacterService } from "core/services/character-service";
import { CharacterDependencies } from "core/services/helpers/character-dependencies";
import AlertMessage from "core/helpers/alert-message";
import router from "router/index";

export default async function (form: LoginSchema) {
  await SessionService.login(form).then(
    async ({ message, statusCode, pubId, access, refresh, type }) => {
      AlertMessage.alertWithTimer(message, statusCode);

      if (statusCode === 200) {
        SessionStorage.set({ pubId, access, refresh, type });

        const { charName } = await CharacterService.get();

        if (!charName) await CharacterDependencies.create();

        router.push({ name: "profile" });

        location.reload();
      }
    }
  );
}

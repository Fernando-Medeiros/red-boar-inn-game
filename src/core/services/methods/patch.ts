import type { Message, StatusCode } from "../schemas/responses-schemas";
import axios, { AxiosError } from "axios";
import { authorizationHeader } from "../headers/authorization";
import { apiTokenHeader } from "../headers/token-key";
import { CheckSession } from "../helpers/check-session";

export async function patchMethod<R = object, D = Message & StatusCode>(
  API?: string,
  body?: object
): Promise<R & D> {
  return await axios
    .patch(String(API), body, {
      headers: { ...apiTokenHeader(), ...authorizationHeader() },
    })

    .then(({ data, status: statusCode }) => {
      return { ...data, statusCode };
    })

    .catch(({ response }: AxiosError) => {
      CheckSession(response?.status);
      return response?.data;
    });
}

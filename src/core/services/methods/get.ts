import type { Message, StatusCode } from "../schemas/responses-schemas";
import axios, { AxiosError } from "axios";
import { authorizationHeader } from "../headers/authorization";
import { apiTokenHeader } from "../headers/token-key";
import { CheckSession } from "../helpers/check-session";

export async function getMethod<R = object, D = Message & StatusCode>(
  API?: string
): Promise<R & D> {
  return await axios
    .get(String(API), {
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

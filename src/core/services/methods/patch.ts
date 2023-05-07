import axios, { AxiosError } from "axios";
import { SecretHeader } from "../headers/api-secret-key";
import { CheckSession } from "../helpers/check-session";

export async function patchMethod<Response = object>(
  URL: string | undefined,
  body?: object,
  headers?: object
): Promise<Response> {
  return await axios
    .patch(String(URL), body, { headers: { ...SecretHeader(), ...headers } })

    .then((response) => {
      const { data, status: statusCode } = response;

      return Object({ ...data, statusCode });
    })
    .catch(({ response }: AxiosError) => {
      CheckSession(response?.status);
      return response?.data;
    });
}

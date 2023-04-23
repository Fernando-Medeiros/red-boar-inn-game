import axios, { AxiosError } from "axios";
import { SecretHeader } from "../headers/api-secret-key";
import { CheckSession } from "../helpers/check-session";

export async function patchMethod<T = object, Response = object>(
  URL: string | undefined,
  body?: T,
  headers?: object
): Promise<Response> {
  return await axios
    .patch(String(URL), body, { headers: { ...SecretHeader(), ...headers } })

    .then((response) => {
      const { data, status } = response;

      return Object({ ...data, status });
    })
    .catch((error: AxiosError) => {
      CheckSession(Object(error.response));

      return error.response?.data;
    });
}

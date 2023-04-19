import axios, { AxiosError } from "axios";
import { SecretHeader } from "../headers/api-secret-key";

export async function postMethod<T = object, Response = object>(
  URL: string | undefined,
  body?: T,
  headers?: object
): Promise<Response> {
  return await axios
    .post(String(URL), body, { headers: { ...SecretHeader(), ...headers } })

    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
}
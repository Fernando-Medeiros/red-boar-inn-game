import axios, { AxiosError } from "axios";
import { SecretHeader } from "../headers/api-secret-key";

export async function deleteMethod<Response = object>(
  URL: string | undefined,
  headers?: object
): Promise<Response> {
  return await axios
    .delete(String(URL), { headers: { ...SecretHeader(), ...headers } })

    .then((response) => {
      const { data, status } = response;

      return Object({ ...data, status });
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
}

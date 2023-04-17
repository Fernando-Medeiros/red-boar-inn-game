import axios, { AxiosError } from "axios";

export async function patchMethod<T = object, Response = object>(
  URL: string,
  body?: T,
  headers?: object
): Promise<Response> {
  return await axios
    .patch(URL, body, { headers: headers })

    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
}

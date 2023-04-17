import axios, { AxiosError } from "axios";

export async function postMethod<T = object, Response = object>(
  URL: string,
  body?: T,
  headers?: object
): Promise<Response> {
  return await axios
    .post(URL, body, { headers: headers })

    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
}

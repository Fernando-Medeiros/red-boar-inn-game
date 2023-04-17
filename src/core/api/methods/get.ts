import axios, { AxiosError } from "axios";

export async function getMethod<Response = object>(
  URL: string,
  headers?: object
): Promise<Response> {
  return await axios
    .get(URL, { headers: headers })

    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
}

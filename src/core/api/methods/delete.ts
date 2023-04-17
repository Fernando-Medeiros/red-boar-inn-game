import axios, { AxiosError } from "axios";

export async function deleteMethod<Response = object>(
  URL: string,
  headers?: object
): Promise<Response> {
  return await axios
    .delete(URL, { headers: headers })

    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      return error.response?.data;
    });
}

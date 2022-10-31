import store from "@/store";
import { HttpClient, HttpRequest } from "./http-client";

export class AuthorizeHttpClient extends HttpClient {
  constructor(url: string) {
    super(url);
  }

  async post<R>(
    url: string,
    request: HttpRequest = { headers: {} }
  ): Promise<R> {
    if (!request.headers.authorization)
      request.headers = {
        ...request.headers,
        authorization:
          "Bearer " + (await store.dispatch("auth/getAccessToken")),
      };

    return await super.post<R>(url, request);
  }

  async get<R>(
    url: string,
    request: HttpRequest = { headers: {} }
  ): Promise<R> {
    if (!request.headers.authorization)
      request.headers = {
        ...request.headers,
        authorization:
          "Bearer " + (await store.dispatch("auth/getAccessToken")),
      };

    return await super.get<R>(url, request);
  }

  async put<R>(
    url: string,
    request: HttpRequest = { headers: {} }
  ): Promise<R> {
    if (!request.headers.authorization)
      request.headers = {
        ...request.headers,
        authorization:
          "Bearer " + (await store.dispatch("auth/getAccessToken")),
      };

    return await super.put<R>(url, request);
  }

  async delete(
    url: string,
    request: HttpRequest = { headers: {} }
  ): Promise<void> {
    if (!request.headers.authorization)
      request.headers = {
        ...request.headers,
        authorization:
          "Bearer " + (await store.dispatch("auth/getAccessToken")),
      };

    return await super.delete(url, request);
  }
}

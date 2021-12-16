import axios from "axios";
export type TokenType = "admin" | "user" | "guest";

declare module "axios" {
  export interface AxiosRequestConfig {
    _tokenType?: TokenType;
  }
}

type Data = {
  id: number;
  message: string;
};

export const sendData = (data: Data) =>
  axios.post<string[]>("someurl", data, { _tokenType: "admin" });

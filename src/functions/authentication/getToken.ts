import { request } from "../../services/request"
import {
  BaseGetTokenFunction,
  TokenPair,
  TokenRequestOptions,
} from "../../types"

export const funcGetToken: BaseGetTokenFunction = async (
  baseUrl: string,
  options: TokenRequestOptions
): Promise<TokenPair> => {
  return await request("POST", {
    baseUrl,
    path: "/auth/local/signin",
    body: JSON.stringify(options),
  })
}

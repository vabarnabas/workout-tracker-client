import { request } from "@b3nch-services/request"
import { TokenPair, TokenRequestOptions } from "@b3nch-types"

export const funcGetToken = async (
  baseUrl: string,
  options: TokenRequestOptions
): Promise<TokenPair> => {
  return await request("POST", {
    baseUrl,
    path: "/auth/local/signin",
    body: JSON.stringify(options),
  })
}

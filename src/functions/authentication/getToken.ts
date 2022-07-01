import { TokenRequestOptions } from "../../types/authentication/getToken.types"
import { TokenPair } from "../../types/common/token-pair.types"

export const ROszTIFunctionGetToken = async (
  options: TokenRequestOptions,
  baseUrl: string
): Promise<TokenPair> => {
  try {
    const response = await fetch(`${baseUrl}/auth/local/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: options.email,
        password: options.password,
      }),
    })
    const data = await response.json()
    return data
  } catch (err) {
    throw new Error("Internal server error.")
  }
}

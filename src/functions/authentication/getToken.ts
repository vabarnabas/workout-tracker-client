import { TokenRequestOptions } from "../../types/authentication/getToken.types"

export const ROszTIFunctionGetToken = async (
  options: TokenRequestOptions,
  baseUrl: string
) => {
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

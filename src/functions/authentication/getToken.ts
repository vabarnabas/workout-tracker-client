import { TokenRequestOptions, TokenPair } from "@roszti-types"
import { ROszTIRequest } from "services/roszti-request"

// export const ROszTIFunctionGetToken = async (
//   options: TokenRequestOptions,
//   baseUrl: string
// ): Promise<TokenPair> => {
//   try {
//     const response = await fetch(`${baseUrl}/auth/local/signin`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: options.email,
//         password: options.password,
//       }),
//     })
//     const data = await response.json()
//     return data
//   } catch (err) {
//     throw new Error("Internal server error.")
//   }
// }

export const ROszTIFunctionGetToken = async (
  baseUrl: string,
  options: TokenRequestOptions
): Promise<TokenPair> => {
  return await ROszTIRequest("POST", {
    baseUrl,
    path: "/auth/local/signin",
    body: JSON.stringify(options),
  })
}

import { ProtectedRouteOptions, User } from "@roszti-types"
import { ROszTIRequest } from "services/roszti-request"

// export const ROszTIFunctionGetCurrentUser2 = async (
//   options: ProtectedRouteOptions,
//   baseUrl: string
// ): Promise<User> => {
//   try {
//     const response = await fetch(`${baseUrl}/auth/current`, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         authorization: `Bearer ${options.token}`,
//       },
//     })
//     const data = await response.json()
//     return data
//   } catch (err) {
//     throw new Error("Internal server error.")
//   }
// }

export const ROszTIFunctionGetCurrentUser = async (
  baseUrl: string,
  options: ProtectedRouteOptions
): Promise<User> => {
  return await ROszTIRequest("GET", {
    baseUrl,
    path: "/auth/current",
    token: options.token,
  })
}

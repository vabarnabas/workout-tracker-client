import { ProtectedRouteOptions } from "@roszti-types/common"
import { User } from "@roszti-types/users"

export const ROszTIFunctionGetCurrentUser = async (
  options: ProtectedRouteOptions,
  baseUrl: string
): Promise<User> => {
  try {
    const response = await fetch(`${baseUrl}/auth/current`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${options.token}`,
      },
    })
    const data = await response.json()
    return data
  } catch (err) {
    throw new Error("Internal server error.")
  }
}

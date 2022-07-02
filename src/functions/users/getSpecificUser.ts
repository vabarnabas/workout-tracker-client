import { ProtectedRouteWithIdOptions, User } from "@roszti-types"

export const ROszTIFunctionGetSpecificUser = async (
  options: ProtectedRouteWithIdOptions,
  baseUrl: string
): Promise<User> => {
  try {
    const response = await fetch(`${baseUrl}/users/${options.id}`, {
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

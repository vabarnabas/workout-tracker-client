import { ProtectedRouteOptions } from "../../types/common/protected-route.types"

export const ROszTIFunctionGetUsers = async (
  options: ProtectedRouteOptions,
  baseUrl: string
) => {
  try {
    const response = await fetch(`${baseUrl}/users`, {
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

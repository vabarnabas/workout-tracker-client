import { request } from "services/request"
import { ProtectedRouteOptions, User } from "types"

export const funcGetCurrentUser = async (
  baseUrl: string,
  options: ProtectedRouteOptions
): Promise<User> => {
  return await request("GET", {
    baseUrl,
    path: "/auth/current",
    token: options.token,
  })
}

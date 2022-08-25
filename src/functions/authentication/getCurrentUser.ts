import { request } from "@b3nch-services/request"
import { ProtectedRouteOptions, User } from "@b3nch-types"

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

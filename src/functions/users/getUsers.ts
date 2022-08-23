import { request } from "@b3nch-services/request"
import { User, ProtectedRouteOptions } from "@b3nch-types"

export const ROszTIFunctionGetUsers = async (
  baseUrl: string,
  options: ProtectedRouteOptions
): Promise<User[]> => {
  return await request("GET", {
    baseUrl,
    path: "/users",
    token: options.token,
  })
}

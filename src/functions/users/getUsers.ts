import { request } from "services/request"
import { BaseGetFunction, ProtectedRouteOptions, User } from "types"

export const funcGetUsers: BaseGetFunction<User> = async (
  baseUrl: string,
  options: ProtectedRouteOptions
): Promise<User[]> => {
  return await request("GET", {
    baseUrl,
    path: "/users",
    token: options.token,
  })
}

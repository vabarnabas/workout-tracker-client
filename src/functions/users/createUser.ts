import { request } from "../../services/request"
import { BaseCreateFunction, ProtectedRouteOptions, User } from "../../types"

export const funcCreateUser: BaseCreateFunction<User> = async (
  baseUrl: string,
  options: ProtectedRouteOptions<User>
): Promise<User> => {
  const newUser: User = {} as User

  if (options.displayName) {
    newUser.displayName = options.displayName
  }

  if (options.handle) {
    newUser.handle = options.handle
  }

  if (options.password) {
    newUser.password = options.password
  }

  return await request("POST", {
    baseUrl,
    path: `/users`,
    token: options.token,
    body: JSON.stringify(newUser),
  })
}

import { request } from "@b3nch-services/request"
import { User, ProtectedRouteOptions } from "@b3nch-types"

export const funcCreateUser = async (
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
    path: `/users/${options.id}`,
    token: options.token,
    body: JSON.stringify(newUser),
  })
}

import { request } from "../../services/request"
import {
  BaseUpdateFunction,
  ProtectedRouteOptions,
  UpdateUser,
  User,
} from "../../types"

export const funcUpdateUser: BaseUpdateFunction<User, UpdateUser> = async (
  baseUrl: string,
  options: ProtectedRouteOptions<UpdateUser>
): Promise<User> => {
  const newUser: UpdateUser = { id: options.id }

  if (options.displayName) {
    newUser.displayName = options.displayName
  }

  if (options.handle) {
    newUser.handle = options.handle
  }

  if (options.password) {
    newUser.password = options.password
  }

  return await request("PATCH", {
    baseUrl,
    path: `/users/${options.id}`,
    token: options.token,
    body: JSON.stringify(newUser),
  })
}

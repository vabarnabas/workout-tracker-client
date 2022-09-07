import { request } from "services/request"
import {
  ProtectedRouteOptions,
  GenericId,
  User,
  BaseDeleteFunction,
} from "types"

export const funcDeleteUser: BaseDeleteFunction<User> = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<User> => {
  return await request("DELETE", {
    baseUrl,
    path: `/users/${options.id}`,
    token: options.token,
  })
}

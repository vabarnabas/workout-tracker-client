import { request } from "../../services/request"
import {
  ProtectedRouteOptions,
  GenericId,
  User,
  BaseGetSpecificFunction,
} from "../../types"

export const funcGetSpecificUser: BaseGetSpecificFunction<User> = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<User> => {
  return await request("GET", {
    baseUrl,
    path: `/users/${options.id}`,
    token: options.token,
  })
}

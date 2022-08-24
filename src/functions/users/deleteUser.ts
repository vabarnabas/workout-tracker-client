import { request } from "@b3nch-services/request"
import { User, ProtectedRouteOptions, GenericId } from "@b3nch-types"

export const funcDeleteUser = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<User> => {
  return await request("DELETE", {
    baseUrl,
    path: `/users/${options.id}`,
    token: options.token,
  })
}

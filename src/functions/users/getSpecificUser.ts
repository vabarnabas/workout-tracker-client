import { request } from "@b3nch-services/request"
import { GenericId, ProtectedRouteOptions, User } from "@b3nch-types"

export const ROszTIFunctionGetSpecificUser = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<User> => {
  return await request("GET", {
    baseUrl,
    path: `/users/${options.id}`,
    token: options.token,
  })
}

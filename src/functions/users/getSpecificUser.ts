import { ROszTIRequest } from "@roszti-services/roszti-request"
import { GenericId, ProtectedRouteOptions, User } from "@roszti-types"

export const ROszTIFunctionGetSpecificUser = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<User> => {
  return await ROszTIRequest("GET", {
    baseUrl,
    path: `/users/${options.id}`,
    token: options.token,
  })
}

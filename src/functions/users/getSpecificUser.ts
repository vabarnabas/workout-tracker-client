import { ROszTIRequest } from "@roszti-services/roszti-request"
import { ProtectedRouteWithIdOptions, User } from "@roszti-types"

export const ROszTIFunctionGetSpecificUser = async (
  baseUrl: string,
  options: ProtectedRouteWithIdOptions
): Promise<User> => {
  return await ROszTIRequest("GET", {
    baseUrl,
    path: `/users/${options.id}`,
    token: options.token,
  })
}

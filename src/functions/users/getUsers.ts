import { ROszTIRequest } from "@roszti-services/roszti-request"
import { User, ProtectedRouteOptions } from "@roszti-types"

export const ROszTIFunctionGetUsers = async (
  baseUrl: string,
  options: ProtectedRouteOptions
): Promise<User[]> => {
  return await ROszTIRequest("GET", {
    baseUrl,
    path: "/users",
    token: options.token,
  })
}

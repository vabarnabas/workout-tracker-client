import { ROszTIRequest } from "@roszti-services/roszti-request"
import { User, ProtectedRouteOptions, UpdateUser } from "@roszti-types"

export const ROszTIFunctionUpdateUser = async (
  baseUrl: string,
  options: ProtectedRouteOptions<UpdateUser>
): Promise<User> => {
  const newUser: UpdateUser = { id: options.id }

  if (options.displayName) {
    newUser.displayName = options.displayName
  }

  if (options.email) {
    newUser.email = options.email
  }

  if (options.password) {
    newUser.password = options.password
  }

  if (options.code) {
    newUser.code = options.code
  }

  return await ROszTIRequest("PATCH", {
    baseUrl,
    path: `/users/${options.id}`,
    token: options.token,
    body: JSON.stringify(newUser),
  })
}

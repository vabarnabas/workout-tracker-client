import { ROszTIFunctionGetCurrentUser } from "./functions/authentication/getCurrentUser"
import { ROszTIFunctionGetToken } from "./functions/authentication/getToken"
import { ROszTIFunctionGetUsers } from "./functions/users/getUsers"
import { TokenRequestOptions } from "./types/authentication/getToken.types"
import { ProtectedRouteOptions } from "./types/common/protected-route.types"

export const useROszTIClient = (baseUrl: string) => {
  if (baseUrl === undefined) throw new Error("Missing argument: Base URL")

  //Authentication
  const getToken = (options: TokenRequestOptions) => {
    return ROszTIFunctionGetToken(options, baseUrl)
  }
  const getCurrentUser = (options: ProtectedRouteOptions) => {
    return ROszTIFunctionGetCurrentUser(options, baseUrl)
  }
  //User Management
  const getUsers = (options: ProtectedRouteOptions) => {
    return ROszTIFunctionGetUsers(options, baseUrl)
  }

  return { getToken, getCurrentUser, getUsers }
}

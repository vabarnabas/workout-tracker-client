import {
  ROszTIFunctionGetToken,
  ROszTIFunctionGetCurrentUser,
} from "@roszti-functions/authentication"
import {
  ROszTIFunctionGetSpecificUser,
  ROszTIFunctionGetUsers,
} from "@roszti-functions/users"
import { ProtectedRouteOptions } from "@roszti-types/common"
import { TokenRequestOptions } from "@roszti-types/authentication"
import { ProtectedRouteWithIdOptions } from "@roszti-types/users"

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
  const getSpecificUser = (options: ProtectedRouteWithIdOptions) => {
    return ROszTIFunctionGetSpecificUser(options, baseUrl)
  }

  return { getToken, getCurrentUser, getUsers, getSpecificUser }
}

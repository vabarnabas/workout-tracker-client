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

/**
 * A multipurpose client used for making calls to the ROszTI API universal and easier.
 * @param baseUrl - The URL needed for the requests.
 */
export const useROszTIClient = (baseUrl: string) => {
  if (baseUrl === undefined) throw new Error("Missing argument: Base URL")

  //Authentication
  /**
   * Generates an Access and Refresh token if the user credentials are correct.
   * @param options - The options required for the function.
   * @returns An Access and a Refresh token.
   */
  const getToken = (options: TokenRequestOptions) => {
    return ROszTIFunctionGetToken(options, baseUrl)
  }
  /**
   * Returns the current user based on the provided Bearer token.
   * @param options - The options required for the function.
   * @returns The user based on the Bearer token.
   */
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

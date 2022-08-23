import {
  ROszTIFunctionGetToken,
  ROszTIFunctionGetCurrentUser,
} from "@b3nch-functions/authentication"
import {
  ROszTIFunctionGetUsers,
  ROszTIFunctionGetSpecificUser,
} from "@b3nch-functions/users"
import { ROszTIFunctionUpdateUser } from "@b3nch-functions/users/updateUser"
import {
  GenericId,
  ProtectedRouteOptions,
  TokenRequestOptions,
  UpdateUser,
} from "@b3nch-types"

/**
 * A multipurpose client used for making calls to the ROszTI API universal and easier.
 * @param baseUrl - The URL needed for the requests.
 */
export const useB3nchClient = (baseUrl: string) => {
  if (baseUrl === undefined) throw new Error("Missing argument: Base URL")

  //Authentication
  /**
   * Generates an Access and Refresh token if the user credentials are correct.
   * @param options - The options required for the function.
   * @returns An Access and a Refresh token.
   */
  const getToken = (options: TokenRequestOptions) => {
    return ROszTIFunctionGetToken(baseUrl, options)
  }
  /**
   * Returns the current user based on the provided Bearer token.
   * @param options - The options required for the function.
   * @returns The user based on the Bearer token.
   */
  const getCurrentUser = (options: ProtectedRouteOptions) => {
    return ROszTIFunctionGetCurrentUser(baseUrl, options)
  }
  //User Management
  /**
   * Returns the array of users in the database.
   * @param options - The options required for the function.
   * @returns The array of users in the database.
   */
  const getUsers = (options: ProtectedRouteOptions) => {
    return ROszTIFunctionGetUsers(baseUrl, options)
  }
  /**
   * Returns a specific user, by a provided id.
   * @param options - The options required for the function.
   * @returns A specific user.
   */
  const getSpecificUser = (options: ProtectedRouteOptions<GenericId>) => {
    return ROszTIFunctionGetSpecificUser(baseUrl, options)
  }

  const updateUser = (options: ProtectedRouteOptions<UpdateUser>) => {
    return ROszTIFunctionUpdateUser(baseUrl, options)
  }

  return { getToken, getCurrentUser, getUsers, getSpecificUser, updateUser }
}

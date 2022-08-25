import {
  funcGetToken,
  funcGetCurrentUser,
} from "@b3nch-functions/authentication"
import {
  funcCreatePlan,
  funcDeletePlan,
  funcGetPlans,
  funcGetSpecificPlan,
  funcUpdatePlan,
} from "@b3nch-functions/plans"
import { funcSearch } from "@b3nch-functions/search"
import {
  funcDeleteUser,
  funcGetSpecificUser,
  funcGetUsers,
  funcUpdateUser,
} from "@b3nch-functions/users"
import {
  GenericId,
  Plan,
  ProtectedRouteOptions,
  SearchQuery,
  TokenRequestOptions,
  UpdatePlan,
  UpdateUser,
  User,
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
    return funcGetToken(baseUrl, options)
  }
  /**
   * Returns the current user based on the provided Bearer token.
   * @param options - The options required for the function.
   * @returns The user based on the Bearer token.
   */
  const getCurrentUser = (options: ProtectedRouteOptions) => {
    return funcGetCurrentUser(baseUrl, options)
  }
  //User Management
  /**
   * Returns the array of users in the database.
   * @param options - The options required for the function.
   * @returns The array of users in the database.
   */
  const getUsers = (options: ProtectedRouteOptions) => {
    return funcGetUsers(baseUrl, options)
  }
  /**
   * Returns a specific user, by a provided id.
   * @param options - The options required for the function.
   * @returns A specific user.
   */
  const getSpecificUser = (options: ProtectedRouteOptions<GenericId>) => {
    return funcGetSpecificUser(baseUrl, options)
  }

  const createUser = (options: ProtectedRouteOptions<User>) => {
    return funcUpdateUser(baseUrl, options)
  }

  const updateUser = (options: ProtectedRouteOptions<UpdateUser>) => {
    return funcUpdateUser(baseUrl, options)
  }

  const deleteUser = (options: ProtectedRouteOptions<GenericId>) => {
    return funcDeleteUser(baseUrl, options)
  }

  const getPlans = (options: ProtectedRouteOptions) => {
    return funcGetPlans(baseUrl, options)
  }

  const getSpecificPlan = (options: ProtectedRouteOptions<GenericId>) => {
    return funcGetSpecificPlan(baseUrl, options)
  }

  const createPlan = (options: ProtectedRouteOptions<Plan>) => {
    return funcCreatePlan(baseUrl, options)
  }

  const updatePlan = (options: ProtectedRouteOptions<UpdatePlan>) => {
    return funcUpdatePlan(baseUrl, options)
  }

  const deletePlan = (options: ProtectedRouteOptions<GenericId>) => {
    return funcDeletePlan(baseUrl, options)
  }

  const search = (options: ProtectedRouteOptions<SearchQuery>) => {
    return funcSearch(baseUrl, options)
  }

  return {
    getToken,
    getCurrentUser,
    getUsers,
    getSpecificUser,
    createUser,
    updateUser,
    deleteUser,
    getPlans,
    getSpecificPlan,
    createPlan,
    updatePlan,
    deletePlan,
    search,
  }
}

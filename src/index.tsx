import { funcGetToken, funcGetCurrentUser } from "functions/authentication"
import {
  funcGetCategories,
  funcGetSpecificCategory,
  funcCreateCategory,
  funcUpdateCategory,
  funcDeleteCategory,
} from "functions/categories"
import {
  funcCreateCollection,
  funcDeleteCollection,
  funcGetCollections,
  funcGetSpecificCollection,
  funcUpdateCollection,
} from "functions/collections"
import { funcConnectCollection } from "functions/collections/connectCollection"
import {
  funcGetPlans,
  funcGetSpecificPlan,
  funcCreatePlan,
  funcUpdatePlan,
  funcDeletePlan,
} from "functions/plans"
import {
  funcGetUsers,
  funcGetSpecificUser,
  funcUpdateUser,
  funcDeleteUser,
} from "functions/users"
import {
  funcGetWorkouts,
  funcGetSpecificWorkout,
  funcCreateWorkout,
  funcUpdateWorkout,
  funcDeleteWorkout,
} from "functions/workouts"
import { funcConnectWorkout } from "functions/workouts/connectWorkout"
import {
  Category,
  ClientCreateFunction,
  ClientDeleteFunction,
  ClientGetFunction,
  ClientGetSpecificFunction,
  ClientGetTokenFunction,
  ClientUpdateFunction,
  ConnectWorkout,
  GenericId,
  Plan,
  ProtectedRouteOptions,
  TokenRequestOptions,
  UpdateCategory,
  UpdatePlan,
  UpdateUser,
  UpdateWorkout,
  User,
  Workout,
} from "types"
import {
  Collection,
  ConnectCollection,
  UpdateCollection,
} from "types/collections"

/**
 * A multipurpose client used for making calls to the ROszTI API universal and easier.
 * @param baseUrl - The URL needed for the requests.
 */
export const useClient = (baseUrl: string) => {
  if (baseUrl === undefined) throw new Error("Missing argument: Base URL")

  //Authentication
  /**
   * Generates an Access and Refresh token if the user credentials are correct.
   * @param options - The options required for the function.
   * @returns An Access and a Refresh token.
   */
  const getToken: ClientGetTokenFunction = (options: TokenRequestOptions) => {
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
  const getUsers: ClientGetFunction<User> = (
    options: ProtectedRouteOptions
  ) => {
    return funcGetUsers(baseUrl, options)
  }
  /**
   * Returns a specific user, by a provided id.
   * @param options - The options required for the function.
   * @returns A specific user.
   */
  const getSpecificUser: ClientGetSpecificFunction<User> = (
    options: ProtectedRouteOptions<GenericId>
  ) => {
    return funcGetSpecificUser(baseUrl, options)
  }

  const createUser: ClientCreateFunction<User> = (
    options: ProtectedRouteOptions<User>
  ) => {
    return funcUpdateUser(baseUrl, options)
  }

  const updateUser: ClientUpdateFunction<User, UpdateUser> = (
    options: ProtectedRouteOptions<UpdateUser>
  ) => {
    return funcUpdateUser(baseUrl, options)
  }

  const deleteUser: ClientDeleteFunction<User> = (
    options: ProtectedRouteOptions<GenericId>
  ) => {
    return funcDeleteUser(baseUrl, options)
  }

  const getCategories = (options: ProtectedRouteOptions) => {
    return funcGetCategories(baseUrl, options)
  }

  const getSpecificCategory = (options: ProtectedRouteOptions<GenericId>) => {
    return funcGetSpecificCategory(baseUrl, options)
  }

  const createCategory = (options: ProtectedRouteOptions<Category>) => {
    return funcCreateCategory(baseUrl, options)
  }

  const updateCategory = (options: ProtectedRouteOptions<UpdateCategory>) => {
    return funcUpdateCategory(baseUrl, options)
  }

  const deleteCategory = (options: ProtectedRouteOptions<GenericId>) => {
    return funcDeleteCategory(baseUrl, options)
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

  const getWorkouts = (options: ProtectedRouteOptions) => {
    return funcGetWorkouts(baseUrl, options)
  }

  const getSpecificWorkout = (options: ProtectedRouteOptions<GenericId>) => {
    return funcGetSpecificWorkout(baseUrl, options)
  }

  const createWorkout = (options: ProtectedRouteOptions<Workout>) => {
    return funcCreateWorkout(baseUrl, options)
  }

  const updateWorkout = (options: ProtectedRouteOptions<UpdateWorkout>) => {
    return funcUpdateWorkout(baseUrl, options)
  }

  const connectWorkout = (options: ProtectedRouteOptions<ConnectWorkout>) => {
    return funcConnectWorkout(baseUrl, options)
  }

  const deleteWorkout = (options: ProtectedRouteOptions<GenericId>) => {
    return funcDeleteWorkout(baseUrl, options)
  }

  const getCollections = (options: ProtectedRouteOptions) => {
    return funcGetCollections(baseUrl, options)
  }

  const getSpecificCollection = (options: ProtectedRouteOptions<GenericId>) => {
    return funcGetSpecificCollection(baseUrl, options)
  }

  const createCollection = (options: ProtectedRouteOptions<Collection>) => {
    return funcCreateCollection(baseUrl, options)
  }

  const updateCollection = (
    options: ProtectedRouteOptions<UpdateCollection>
  ) => {
    return funcUpdateCollection(baseUrl, options)
  }

  const connectCollection = (
    options: ProtectedRouteOptions<ConnectCollection>
  ) => {
    return funcConnectCollection(baseUrl, options)
  }

  const deleteCollection = (options: ProtectedRouteOptions<GenericId>) => {
    return funcDeleteCollection(baseUrl, options)
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
    getCategories,
    getSpecificCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getWorkouts,
    getSpecificWorkout,
    createWorkout,
    updateWorkout,
    connectWorkout,
    deleteWorkout,
    getCollections,
    getSpecificCollection,
    createCollection,
    connectCollection,
    updateCollection,
    deleteCollection,
  }
}

import {
  TokenRequestOptions,
  ProtectedRouteOptions,
  User,
  GenericId,
  UpdateUser,
  UpdateCategory,
  UpdatePlan,
  UpdateWorkout,
  ConnectWorkout,
  UpdateCollection,
  ConnectCollection,
  CreateUser,
  CreateCategory,
  CreatePlan,
  CreateWorkout,
  CreateCollection,
  CreatePost,
  UpdatePost,
} from "./types"
import {
  ClientCreateFunction,
  ClientDeleteFunction,
  ClientGetFunction,
  ClientGetSpecificFunction,
  ClientGetTokenFunction,
  ClientUpdateFunction,
} from "./types/functions/functions.types"
import {
  funcGetToken,
  funcGetCurrentUser,
  funcGetUsers,
  funcGetSpecificUser,
  funcUpdateUser,
  funcDeleteUser,
  funcGetCategories,
  funcGetSpecificCategory,
  funcCreateCategory,
  funcUpdateCategory,
  funcDeleteCategory,
  funcGetPlans,
  funcGetSpecificPlan,
  funcCreatePlan,
  funcUpdatePlan,
  funcDeletePlan,
  funcGetWorkouts,
  funcGetSpecificWorkout,
  funcCreateWorkout,
  funcUpdateWorkout,
  funcConnectWorkout,
  funcDeleteWorkout,
  funcGetCollections,
  funcGetSpecificCollection,
  funcCreateCollection,
  funcUpdateCollection,
  funcConnectCollection,
  funcDeleteCollection,
  funcCreateUser,
} from "./functions"
import {
  funcCreatePost,
  funcDeletePost,
  funcGetPosts,
  funcGetSpecificPost,
  funcUpdatePost,
} from "./functions/posts"

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

  const createUser: ClientCreateFunction<User, CreateUser> = (
    options: ProtectedRouteOptions<CreateUser>
  ) => {
    return funcCreateUser(baseUrl, options)
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

  const createCategory = (options: ProtectedRouteOptions<CreateCategory>) => {
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

  const createPlan = (options: ProtectedRouteOptions<CreatePlan>) => {
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

  const createWorkout = (options: ProtectedRouteOptions<CreateWorkout>) => {
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

  const createCollection = (
    options: ProtectedRouteOptions<CreateCollection>
  ) => {
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

  const getPosts = (options: ProtectedRouteOptions) => {
    return funcGetPosts(baseUrl, options)
  }

  const getSpecificPost = (options: ProtectedRouteOptions<GenericId>) => {
    return funcGetSpecificPost(baseUrl, options)
  }

  const createPost = (options: ProtectedRouteOptions<CreatePost>) => {
    return funcCreatePost(baseUrl, options)
  }

  const updatePost = (options: ProtectedRouteOptions<UpdatePost>) => {
    return funcUpdatePost(baseUrl, options)
  }

  const deletePost = (options: ProtectedRouteOptions<GenericId>) => {
    return funcDeletePost(baseUrl, options)
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
    getPosts,
    getSpecificPost,
    createPost,
    updatePost,
    deletePost,
  }
}

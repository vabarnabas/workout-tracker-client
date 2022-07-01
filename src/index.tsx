import {
  CurrentUserRequestOptions,
  ROszTIFunctionGetCurrentUser,
} from "./functions/authentication/getCurrentUser"
import {
  ROszTIFunctionGetToken,
  TokenRequestOptions,
} from "./functions/authentication/getToken"

export const useROszTIClient = (baseUrl: string | undefined) => {
  if (baseUrl === undefined) throw new Error("Missing argument: Base URL")

  const getToken = (options: TokenRequestOptions) => {
    return ROszTIFunctionGetToken(options, baseUrl || "")
  }
  const getCurrentUser = (options: CurrentUserRequestOptions) => {
    return ROszTIFunctionGetCurrentUser(options, baseUrl || "")
  }

  return { getToken, getCurrentUser }
}

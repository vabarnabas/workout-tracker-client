import { request } from "../../services/request"
import { ProtectedRouteOptions, Collection } from "../../types"

export const funcGetCollections = async (
  baseUrl: string,
  options: ProtectedRouteOptions
): Promise<Collection[]> => {
  return await request("GET", {
    baseUrl,
    path: "/collections",
    token: options.token,
  })
}

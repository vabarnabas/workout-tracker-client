import { request } from "services/request"
import { ProtectedRouteOptions } from "types"
import { Collection } from "types/collections"

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

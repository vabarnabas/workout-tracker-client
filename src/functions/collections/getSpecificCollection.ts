import { request } from "services/request"
import { ProtectedRouteOptions, GenericId } from "types"
import { Collection } from "types/collections"

export const funcGetSpecificCollection = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<Collection> => {
  return await request("GET", {
    baseUrl,
    path: `/collections/${options.id}`,
    token: options.token,
  })
}

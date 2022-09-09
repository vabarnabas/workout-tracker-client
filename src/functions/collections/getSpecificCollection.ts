import { request } from "../../services/request"
import { ProtectedRouteOptions, GenericId, Collection } from "../../types"

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

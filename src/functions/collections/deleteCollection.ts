import { request } from "../../services/request"
import { ProtectedRouteOptions, GenericId, Collection } from "../../types"

export const funcDeleteCollection = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<Collection> => {
  return await request("DELETE", {
    baseUrl,
    path: `/collections/${options.id}`,
    token: options.token,
  })
}

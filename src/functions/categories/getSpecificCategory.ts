import { request } from "services/request"
import { ProtectedRouteOptions, GenericId, Category } from "types"

export const funcGetSpecificCategory = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<Category> => {
  return await request("GET", {
    baseUrl,
    path: `/categories/${options.id}`,
    token: options.token,
  })
}

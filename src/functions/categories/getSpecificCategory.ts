import { request } from "@b3nch-services/request"
import { GenericId, Category, ProtectedRouteOptions } from "@b3nch-types"

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

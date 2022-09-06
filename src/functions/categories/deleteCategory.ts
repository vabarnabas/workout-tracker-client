import { request } from "@b3nch-services/request"
import { Category, ProtectedRouteOptions, GenericId } from "@b3nch-types"

export const funcDeleteCategory = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<Category> => {
  return await request("DELETE", {
    baseUrl,
    path: `/categories/${options.id}`,
    token: options.token,
  })
}

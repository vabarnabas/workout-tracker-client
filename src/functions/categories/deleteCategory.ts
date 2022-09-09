import { request } from "../../services/request"
import { Category, GenericId, ProtectedRouteOptions } from "../../types"

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

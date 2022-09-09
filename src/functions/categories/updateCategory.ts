import { request } from "../../services/request"
import { ProtectedRouteOptions, UpdateCategory, Category } from "../../types"

export const funcUpdateCategory = async (
  baseUrl: string,
  options: ProtectedRouteOptions<UpdateCategory>
): Promise<Category> => {
  const newCategory: UpdateCategory = { id: options.id }

  if (options.displayName) {
    newCategory.displayName = options.displayName
  }

  return await request("PATCH", {
    baseUrl,
    path: `/categories/${options.id}`,
    token: options.token,
    body: JSON.stringify(newCategory),
  })
}

import { request } from "@b3nch-services/request"
import { Category, ProtectedRouteOptions, UpdateCategory } from "@b3nch-types"

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

import { request } from "services/request"
import { ProtectedRouteOptions, Category } from "types"

export const funcCreateCategory = async (
  baseUrl: string,
  options: ProtectedRouteOptions<Category>
): Promise<Category> => {
  const newCategory: Category = {} as Category

  if (options.displayName) {
    newCategory.displayName = options.displayName
  }

  return await request("POST", {
    baseUrl,
    path: `/categories`,
    token: options.token,
    body: JSON.stringify(newCategory),
  })
}

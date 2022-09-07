import { request } from "services/request"
import { ProtectedRouteOptions, Category } from "types"

export const funcGetCategories = async (
  baseUrl: string,
  options: ProtectedRouteOptions
): Promise<Category[]> => {
  return await request("GET", {
    baseUrl,
    path: "/categories",
    token: options.token,
  })
}

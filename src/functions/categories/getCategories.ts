import { request } from "@b3nch-services/request"
import { ProtectedRouteOptions, Category } from "@b3nch-types"

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

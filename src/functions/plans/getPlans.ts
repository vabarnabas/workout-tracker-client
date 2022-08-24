import { request } from "@b3nch-services/request"
import { ProtectedRouteOptions, Plan } from "@b3nch-types"

export const funcGetPlans = async (
  baseUrl: string,
  options: ProtectedRouteOptions
): Promise<Plan[]> => {
  return await request("GET", {
    baseUrl,
    path: "/plans",
    token: options.token,
  })
}

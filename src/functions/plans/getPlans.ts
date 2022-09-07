import { request } from "services/request"
import { Plan, ProtectedRouteOptions } from "types"

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

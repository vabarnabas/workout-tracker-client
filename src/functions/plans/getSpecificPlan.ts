import { request } from "@b3nch-services/request"
import { GenericId, Plan, ProtectedRouteOptions } from "@b3nch-types"

export const funcGetSpecificPlan = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<Plan> => {
  return await request("GET", {
    baseUrl,
    path: `/plans/${options.id}`,
    token: options.token,
  })
}

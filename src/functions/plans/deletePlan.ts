import { request } from "@b3nch-services/request"
import { Plan, ProtectedRouteOptions, GenericId } from "@b3nch-types"

export const funcDeletePlan = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<Plan> => {
  return await request("DELETE", {
    baseUrl,
    path: `/plans/${options.id}`,
    token: options.token,
  })
}

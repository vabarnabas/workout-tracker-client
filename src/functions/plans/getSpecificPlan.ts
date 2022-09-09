import { request } from "../../services/request"
import { ProtectedRouteOptions, GenericId, Plan } from "../../types"

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

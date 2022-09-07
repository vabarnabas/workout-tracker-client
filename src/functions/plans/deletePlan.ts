import { request } from "services/request"
import { ProtectedRouteOptions, GenericId, Plan } from "types"

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

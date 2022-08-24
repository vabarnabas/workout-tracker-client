import { request } from "@b3nch-services/request"
import { Plan, ProtectedRouteOptions, UpdatePlan } from "@b3nch-types"

export const funcUpdatePlan = async (
  baseUrl: string,
  options: ProtectedRouteOptions<UpdatePlan>
): Promise<Plan> => {
  const newPlan: UpdatePlan = { id: options.id }

  if (options.displayName) {
    newPlan.displayName = options.displayName
  }

  if (options.createdBy) {
    newPlan.createdBy = options.createdBy
  }

  return await request("PATCH", {
    baseUrl,
    path: `/plans/${options.id}`,
    token: options.token,
    body: JSON.stringify(newPlan),
  })
}

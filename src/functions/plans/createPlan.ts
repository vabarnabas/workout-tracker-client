import { request } from "services/request"
import { Plan, ProtectedRouteOptions } from "types"

export const funcCreatePlan = async (
  baseUrl: string,
  options: ProtectedRouteOptions<Plan>
): Promise<Plan> => {
  const newPlan: Plan = {} as Plan

  if (options.displayName) {
    newPlan.displayName = options.displayName
  }

  if (options.createdBy) {
    newPlan.createdBy = options.createdBy
  }

  return await request("POST", {
    baseUrl,
    path: `/plans`,
    token: options.token,
    body: JSON.stringify(newPlan),
  })
}

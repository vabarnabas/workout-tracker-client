import { request } from "../../services/request"
import { CreatePlan, Plan, ProtectedRouteOptions } from "../../types"

export const funcCreatePlan = async (
  baseUrl: string,
  options: ProtectedRouteOptions<CreatePlan>
): Promise<Plan> => {
  const newPlan: Plan = {} as Plan

  if (options.displayName) {
    newPlan.displayName = options.displayName
  }

  if (options.description) {
    newPlan.description = options.description
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

import { request } from "@b3nch-services/request"
import { GenericId, ProtectedRouteOptions, Workout } from "@b3nch-types"

export const funcGetSpecificWorkout = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<Workout> => {
  return await request("GET", {
    baseUrl,
    path: `/workouts/${options.id}`,
    token: options.token,
  })
}

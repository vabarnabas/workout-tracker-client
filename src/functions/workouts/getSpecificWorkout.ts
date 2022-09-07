import { request } from "services/request"
import { ProtectedRouteOptions, GenericId, Workout } from "types"

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

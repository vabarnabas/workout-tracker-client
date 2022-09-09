import { request } from "../../services/request"
import { ProtectedRouteOptions, GenericId, Workout } from "../../types"

export const funcDeleteWorkout = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<Workout> => {
  return await request("DELETE", {
    baseUrl,
    path: `/workouts/${options.id}`,
    token: options.token,
  })
}

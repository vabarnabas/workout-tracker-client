import { request } from "../../services/request"
import { ProtectedRouteOptions, UpdateWorkout, Workout } from "../../types"

export const funcUpdateWorkout = async (
  baseUrl: string,
  options: ProtectedRouteOptions<UpdateWorkout>
): Promise<Workout> => {
  const newWorkout: UpdateWorkout = { id: options.id }

  if (options.displayName) {
    newWorkout.displayName = options.displayName
  }

  newWorkout.verified = options.verified || false

  return await request("PATCH", {
    baseUrl,
    path: `/workouts/${options.id}`,
    token: options.token,
    body: JSON.stringify(newWorkout),
  })
}

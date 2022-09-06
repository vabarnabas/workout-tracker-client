import { request } from "@b3nch-services/request"
import { ProtectedRouteOptions, UpdateWorkout, Workout } from "@b3nch-types"

export const funcUpdateWorkout = async (
  baseUrl: string,
  options: ProtectedRouteOptions<UpdateWorkout>
): Promise<Workout> => {
  const newWorkout: UpdateWorkout = { id: options.id }

  if (options.displayName) {
    newWorkout.displayName = options.displayName
  }

  if (options.verified) {
    newWorkout.verified = options.verified
  }

  return await request("PATCH", {
    baseUrl,
    path: `/workouts/${options.id}`,
    token: options.token,
    body: JSON.stringify(newWorkout),
  })
}
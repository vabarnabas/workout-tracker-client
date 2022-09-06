import { request } from "@b3nch-services/request"
import { Workout, ProtectedRouteOptions } from "@b3nch-types"

export const funcCreateWorkout = async (
  baseUrl: string,
  options: ProtectedRouteOptions<Workout>
): Promise<Workout> => {
  const newWorkout: Workout = {} as Workout

  if (options.displayName) {
    newWorkout.displayName = options.displayName
  }

  return await request("POST", {
    baseUrl,
    path: `/workouts/${options.id}`,
    token: options.token,
    body: JSON.stringify(newWorkout),
  })
}

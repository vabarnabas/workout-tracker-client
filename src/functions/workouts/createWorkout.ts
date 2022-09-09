import { request } from "../../services/request"
import { CreateWorkout, ProtectedRouteOptions, Workout } from "../../types"

export const funcCreateWorkout = async (
  baseUrl: string,
  options: ProtectedRouteOptions<CreateWorkout>
): Promise<Workout> => {
  const newWorkout: Workout = {} as Workout

  if (options.displayName) {
    newWorkout.displayName = options.displayName
  }

  newWorkout.verified = options.verified || false

  return await request("POST", {
    baseUrl,
    path: `/workouts`,
    token: options.token,
    body: JSON.stringify(newWorkout),
  })
}

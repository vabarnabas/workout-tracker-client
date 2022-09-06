import { request } from "@b3nch-services/request"
import {
  ProtectedRouteOptions,
  UpdateUser,
  UpdateWorkout,
  Workout,
} from "@b3nch-types"

export const funcUpdateWorkout = async (
  baseUrl: string,
  options: ProtectedRouteOptions<UpdateWorkout>
): Promise<Workout> => {
  const newWorkout: UpdateUser = { id: options.id }

  if (options.displayName) {
    newWorkout.displayName = options.displayName
  }

  return await request("PATCH", {
    baseUrl,
    path: `/workouts/${options.id}`,
    token: options.token,
    body: JSON.stringify(newWorkout),
  })
}

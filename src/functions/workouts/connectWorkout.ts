import { request } from "../../services/request"
import { ProtectedRouteOptions, ConnectWorkout, Workout } from "../../types"

export const funcConnectWorkout = async (
  baseUrl: string,
  options: ProtectedRouteOptions<ConnectWorkout>
): Promise<Workout> => {
  const newWorkout: ConnectWorkout = { id: options.id }

  if (options.categoryId) {
    newWorkout.categoryId = options.categoryId
  }

  if (options.planId) {
    newWorkout.planId = options.planId
  }

  return await request("POST", {
    baseUrl,
    path: `/workouts/connect/${options.id}`,
    token: options.token,
    body: JSON.stringify(newWorkout),
  })
}

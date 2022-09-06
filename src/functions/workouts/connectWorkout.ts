import { request } from "@b3nch-services/request"
import {
  ConnectWorkout,
  GenericId,
  ProtectedRouteOptions,
  Workout,
} from "@b3nch-types"

export const funcConnectWorkout = async (
  baseUrl: string,
  options: ProtectedRouteOptions<ConnectWorkout & GenericId>
): Promise<Workout> => {
  const newWorkout: ConnectWorkout = {}

  if (options.categoryId) {
    newWorkout.categoryId = options.categoryId
  }

  if (options.planId) {
    newWorkout.planId = options.planId
  }

  return await request("PATCH", {
    baseUrl,
    path: `/workouts/connect/${options.id}`,
    token: options.token,
    body: JSON.stringify(newWorkout),
  })
}

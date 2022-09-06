import { request } from "@b3nch-services/request"
import { ProtectedRouteOptions, Workout } from "@b3nch-types"

export const funcGetWorkouts = async (
  baseUrl: string,
  options: ProtectedRouteOptions
): Promise<Workout[]> => {
  return await request("GET", {
    baseUrl,
    path: "/workouts",
    token: options.token,
  })
}

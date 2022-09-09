import { request } from "../../services/request"
import { ProtectedRouteOptions, Workout } from "../../types"

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

import { request } from "../../services/request"
import { Post, ProtectedRouteOptions } from "../../types"

export const funcGetPosts = async (
  baseUrl: string,
  options: ProtectedRouteOptions
): Promise<Post[]> => {
  return await request("GET", {
    baseUrl,
    path: "/posts",
    token: options.token,
  })
}

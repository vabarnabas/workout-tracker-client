import { request } from "../../services/request"
import { ProtectedRouteOptions, GenericId, Post } from "../../types"

export const funcGetSpecificPost = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<Post> => {
  return await request("GET", {
    baseUrl,
    path: `/posts/${options.id}`,
    token: options.token,
  })
}

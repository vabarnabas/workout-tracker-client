import { request } from "../../services/request"
import { ProtectedRouteOptions, GenericId, Post } from "../../types"

export const funcDeletePost = async (
  baseUrl: string,
  options: ProtectedRouteOptions<GenericId>
): Promise<Post> => {
  return await request("DELETE", {
    baseUrl,
    path: `/posts/${options.id}`,
    token: options.token,
  })
}

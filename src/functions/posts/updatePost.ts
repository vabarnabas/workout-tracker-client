import { request } from "../../services/request"
import { ProtectedRouteOptions, UpdatePost, Post } from "../../types"

export const funcUpdatePost = async (
  baseUrl: string,
  options: ProtectedRouteOptions<UpdatePost>
): Promise<Post> => {
  const newPost: UpdatePost = { id: options.id }

  if (options.createdAt) {
    newPost.createdAt = options.createdAt
  }

  if (options.description) {
    newPost.description = options.description
  }

  if (options.creatorId) {
    newPost.creatorId = options.creatorId
  }

  if (options.planId) {
    newPost.planId = options.planId
  }

  return await request("PATCH", {
    baseUrl,
    path: `/posts/${options.id}`,
    token: options.token,
    body: JSON.stringify(newPost),
  })
}

import { request } from "../../services/request"
import { CreatePost, Post, ProtectedRouteOptions } from "../../types"

export const funcCreatePost = async (
  baseUrl: string,
  options: ProtectedRouteOptions<CreatePost>
): Promise<Post> => {
  const newPost: Post = {} as Post

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

  return await request("POST", {
    baseUrl,
    path: `/posts`,
    token: options.token,
    body: JSON.stringify(newPost),
  })
}

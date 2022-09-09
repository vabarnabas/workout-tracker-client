import { Optional } from "../common"

export interface Post {
  id: string
  description: string
  createdAt: Date
  creatorId: string
  planId: string
}

export interface CreatePost extends Optional<Post, "id"> {}

export interface UpdatePost extends Partial<Post> {
  id: string
}

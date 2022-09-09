import { Optional } from "../common"
import { Plan } from "../plans"
import { User } from "../users"

export interface Post {
  id: string
  description: string
  createdAt: Date
  creatorId: string
  planId: string
  user?: User
  plan?: Plan
}

export interface CreatePost extends Optional<Post, "id"> {}

export interface UpdatePost extends Partial<Post> {
  id: string
}

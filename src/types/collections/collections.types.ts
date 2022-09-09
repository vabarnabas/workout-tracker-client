import { Plan } from "../plans"
import { User } from "../users"
import { Optional } from "../common"
export interface Collection {
  id: string
  displayName: string
  description: string
  createdBy: string
  user?: User
  plans: Plan[]
}

export interface CreateCollection extends Optional<Collection, "id"> {}

export interface UpdateCollection extends Partial<Collection> {
  id: string
}

export interface ConnectCollection {
  id: string
  planId?: string
}

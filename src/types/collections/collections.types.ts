import { Plan } from "../plans"
import { User } from "../users"

export interface Collection {
  id: string
  displayName: string
  description: string
  createdBy: string
  user?: User
  plans: Plan[]
}

export interface UpdateCollection extends Partial<Collection> {
  id: string
}

export interface ConnectCollection {
  id: string
  planId?: string
}

import { User } from "types/users"

export interface Plan {
  id: string
  displayName: string
  createdBy: string
  user?: User
}

export interface UpdatePlan extends Partial<Plan> {
  id: string
}

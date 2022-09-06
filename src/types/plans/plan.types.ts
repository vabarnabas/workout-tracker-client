import { User } from "types/users"
import { Workout } from "types/workouts"

export interface Plan {
  id: string
  displayName: string
  createdBy: string
  user?: User
  workouts: Workout[]
}

export interface UpdatePlan extends Partial<Plan> {
  id: string
}

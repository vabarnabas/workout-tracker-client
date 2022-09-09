import { User } from "../users"
import { Workout } from "../workouts"

export interface Plan {
  id: string
  displayName: string
  description: string
  createdBy: string
  user?: User
  workouts: Workout[]
}

export interface UpdatePlan extends Partial<Plan> {
  id: string
}

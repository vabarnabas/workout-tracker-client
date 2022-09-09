import { Category } from "../categories"
import { Plan } from "../plans"

export interface Workout {
  id: string
  displayName: string
  verified: boolean
  plans: Plan[]
  categories: Category[]
}

export interface UpdateWorkout extends Partial<Workout> {
  id: string
}

export interface ConnectWorkout {
  id: string
  planId?: string
  categoryId?: string
}

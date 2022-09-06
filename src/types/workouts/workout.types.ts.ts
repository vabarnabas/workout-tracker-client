import { Category } from "types/categories"
import { Plan } from "types/plans"

export interface Workout {
  id: string
  displayName: string
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

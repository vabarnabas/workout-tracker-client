import { Optional } from "../common"

export interface Category {
  id: string
  displayName: string
}

export interface CreateCategory extends Optional<Category, "id"> {}

export interface UpdateCategory extends Partial<Category> {
  id: string
}

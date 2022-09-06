export interface Category {
  id: string
  displayName: string
}

export interface UpdateCategory extends Partial<Category> {
  id: string
}

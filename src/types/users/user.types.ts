export interface User {
  id: string
  displayName: string
  handle: string
  password: string
}

export interface UpdateUser extends Partial<User> {
  id: string
}

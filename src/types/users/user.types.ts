import { Optional } from "../common"

export interface User {
  id: string
  displayName: string
  handle: string
  password: string
}

export interface CreateUser extends Optional<User, "id"> {}

export interface UpdateUser extends Partial<User> {
  id: string
}

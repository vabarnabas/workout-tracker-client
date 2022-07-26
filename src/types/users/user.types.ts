export interface User {
  id: string
  displayName: string
  userName: string
  email: string
  code: string
  password: string
  active: boolean
  refreshToken: string | null
}

export interface UpdateUser {
  id: string
  displayName?: string
  userName?: string
  email?: string
  code?: string
  password?: string
  active?: boolean
  refreshToken?: string | null
}

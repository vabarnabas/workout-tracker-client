export interface User {
  id: string
  displayName: string
  email: string
  code: string
  password: string
  refreshToken: string | null
}

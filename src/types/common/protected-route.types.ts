export type ProtectedRouteOptions<T = {}> = T & {
  token: string
}

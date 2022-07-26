export type ProtectedRouteOptions<T = void> = T & {
  token: string
}

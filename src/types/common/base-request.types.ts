export type RequestMethod = "GET" | "POST" | "PATCH" | "DELETE"

export type RequestHeader = [string, string]

export interface RequestOptions {
  baseUrl: string
  token?: string
  body?: string
  headers?: RequestHeader[]
}

export interface RequestConfig {
  method: RequestMethod
  headers: {
    [header: string]: string
  }
  body?: string
  token?: string
}

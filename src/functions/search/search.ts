import { request } from "@b3nch-services/request"
import {
  ProtectedRouteOptions,
  SearchQuery,
  SearchResponse,
} from "@b3nch-types"

export const funcSearch = async (
  baseUrl: string,
  options: ProtectedRouteOptions<SearchQuery>
): Promise<SearchResponse[]> => {
  return await request("GET", {
    baseUrl,
    path: `/search/${options.query}`,
    token: options.token,
  })
}

import { request } from "../../services/request"
import {
  Collection,
  CreateCollection,
  ProtectedRouteOptions,
} from "../../types"

export const funcCreateCollection = async (
  baseUrl: string,
  options: ProtectedRouteOptions<CreateCollection>
): Promise<Collection> => {
  const newCollection: Collection = {} as Collection

  if (options.displayName) {
    newCollection.displayName = options.displayName
  }

  if (options.description) {
    newCollection.description = options.description
  }

  if (options.createdBy) {
    newCollection.createdBy = options.createdBy
  }

  return await request("POST", {
    baseUrl,
    path: `/collections`,
    token: options.token,
    body: JSON.stringify(newCollection),
  })
}

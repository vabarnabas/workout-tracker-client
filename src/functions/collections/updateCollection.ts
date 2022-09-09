import { request } from "../../services/request"
import {
  Collection,
  ProtectedRouteOptions,
  UpdateCollection,
} from "../../types"

export const funcUpdateCollection = async (
  baseUrl: string,
  options: ProtectedRouteOptions<UpdateCollection>
): Promise<Collection> => {
  const newCollection: UpdateCollection = { id: options.id }

  if (options.displayName) {
    newCollection.displayName = options.displayName
  }

  if (options.description) {
    newCollection.description = options.description
  }

  if (options.createdBy) {
    newCollection.createdBy = options.createdBy
  }

  return await request("PATCH", {
    baseUrl,
    path: `/collections/${options.id}`,
    token: options.token,
    body: JSON.stringify(newCollection),
  })
}

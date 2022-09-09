import { request } from "services/request"
import { ProtectedRouteOptions } from "types"
import { Collection, ConnectCollection } from "types/collections"

export const funcConnectCollection = async (
  baseUrl: string,
  options: ProtectedRouteOptions<ConnectCollection>
): Promise<Collection> => {
  const newCollection: ConnectCollection = { id: options.id }

  if (options.planId) {
    newCollection.planId = options.planId
  }

  return await request("POST", {
    baseUrl,
    path: `/collections/connect/${options.id}`,
    token: options.token,
    body: JSON.stringify(newCollection),
  })
}

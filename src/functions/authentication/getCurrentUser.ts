export interface CurrentUserRequestOptions {
  token: string
}

export const ROszTIFunctionGetCurrentUser = async (
  options: CurrentUserRequestOptions,
  baseUrl: string
) => {
  try {
    const currentUserRequest = await fetch(`${baseUrl}/current`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: `Bearer ${options.token}`,
      },
    })
    const data = await currentUserRequest.json()
    return data.data
  } catch (err) {
    throw new Error("Internal server error.")
  }
}

export interface TokenRequestOptions {
  email: string
  password: string
}

export const ROszTIFunctionGetToken = async (
  options: TokenRequestOptions,
  baseUrl: string
) => {
  try {
    const tokenRequest = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: options.email,
        password: options.password,
      }),
    })
    const data = await tokenRequest.json()
    return data.data.token
  } catch (err) {
    throw new Error("Internal server error.")
  }
}

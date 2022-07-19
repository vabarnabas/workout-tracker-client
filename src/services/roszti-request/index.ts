import { RequestConfig, RequestMethod, RequestOptions } from "@roszti-types"

export const ROszTIRequest = async (
  method: RequestMethod,
  options: RequestOptions
) => {
  const config: RequestConfig = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }

  if (options.headers && options.headers.length > 0) {
    options.headers.forEach((header) => {
      config.headers[header[0]] = header[1]
    })
  }

  if (options.body) {
    config.body
  }

  if (options.token) {
    config.headers.authorization = `Bearer ${options.token}`
  }

  try {
    const response = await fetch(options.baseUrl, config)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error("Internal server error.")
  }
}

ROszTIRequest("GET", { baseUrl: "", headers: [["a", "b"]] })

import {
  getOrSetCache,
  getAuthorizedKeys,
  getKey,
  incrKey,
} from "@/lib/extractedFunctions"
import { headers } from "next/headers"
import logger from "@/lib/winstonLogger"

export async function GET() {
  logger.info("Received GET request")

  const apiKey = headers().get("x-api-key")
  if (!apiKey) {
    logger.warn("API key missing")
    return Response.json({ error: "API key required" })
  }

  const authorizedApiKeyArray = await getAuthorizedKeys()
  if (!authorizedApiKeyArray.includes(apiKey)) {
    logger.warn("Unauthorized API key:", { apiKey })
    return Response.json({ error: "Unauthorized: Invalid API key" })
  }

  const cacheKey = "ticketekData"

  try {
    logger.info("Fetching data from cache or setting new data")
    const data = await getOrSetCache(cacheKey)
    logger.info("Data retrieved successfully")

    logger.info(`Custom api calls count: ${await incrKey("customApiCalls")}`)

    logger.info(`Cache usage:${await getKey("cacheUsage")}`)

    return Response.json(data)
  } catch (error) {
    const apiErrorCount = await incrKey("customApiErrors")
    logger.error("Error handling the request:", { error, apiErrorCount })
    return Response.json({ error: "Internal server error" })
  }
}

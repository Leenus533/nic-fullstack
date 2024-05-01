import { combineObjects } from "@/components/logic"
import redis from "./redisClient"
import logger from "./winstonLogger"
import config from "@../../../config.json"

async function fetchDataFromAPI() {
  incrKey("apiCalls")
  logger.info("Fetching data from motorpoint api")
  const response = await fetch(
    "https://whatson.motorpointarenanottingham.com/api/challenge",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": `${process.env.API_KEY}`,
      },
    }
  )
  if (!response.ok) {
    logger.error("Failed to fetch events from motorpoint api")
    console.log(response)
    throw new Error("Failed to fetch events")
  }
  const data = await response.json()
  return data
}

async function getOrSetCache(cacheKey: string) {
  try {
    const cachedData = await redis.get(cacheKey)
    if (cachedData != null) {
      incrKey("cacheUsage")
      return JSON.parse(cachedData)
    }
    const data = await fetchDataFromAPI()
    const dataCombined = combineObjects(data)
    logger.info("Setting cache from formated data")
    await redis.set(
      cacheKey,
      JSON.stringify(dataCombined),
      "EX",
      config.redisExpiryInSeconds
    )
    return dataCombined
  } catch (err) {
    logger.error("Error with getting and setting cache data", err)
    const data = await fetchDataFromAPI()
    console.log(err)
    return data
  }
}

const getKey = async (key: string) => {
  return redis.get(key)
}

const incrKey = async (key: string) => {
  return redis.incr(key)
}

const getAuthorizedKeys = async () => {
  return redis.lrange("authorizedApiKeys", 0, -1)
}

export { getOrSetCache, getKey, getAuthorizedKeys, incrKey }

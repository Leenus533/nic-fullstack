import Redis from "ioredis"

let redisInstance: Redis | null = null

export function getRedisClient(): Redis {
  if (!redisInstance) {
    redisInstance = new Redis()
    redisInstance.on("connect", () => console.log("Connected to Redis"))
    redisInstance.on("error", (err) => console.error("Redis Client Error", err))
  }
  return redisInstance
}

const redis = getRedisClient()

//@ts-ignore
redis.lpush("authorizedApiKeys", process.env.API_KEY)

export default redis

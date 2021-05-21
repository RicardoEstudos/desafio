import * as redis from "redis";

class RedisRepo implements CacheRepo {

    constructor(
        private readonly client:redis.RedisClient,
        options: Object
    ){
        this.client = redis.createClient(options);
    }

    async setCache(key: string, value: any) {

        this.client.get(key);
    }

    async getCache(key: string) {
        
        return this.client.get(key);
    }
}

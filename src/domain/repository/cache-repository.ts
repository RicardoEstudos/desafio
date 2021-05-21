interface CacheRepo {

    setCache:( key:any, value:any ) => Promise<void>

    getCache:( key:any ) => Promise<any>
}
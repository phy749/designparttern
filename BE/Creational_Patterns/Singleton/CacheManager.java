public class CacheManager {
    private static CacheManager instance = new CacheManager();
    private Map<String, Object> cache = new HashMap<>();

    private CacheManager() {}

    public static CacheManager getInstance() { return instance; }

    public void put(String key, Object value) { cache.put(key, value); }
    public Object get(String key) { return cache.get(key); }
}

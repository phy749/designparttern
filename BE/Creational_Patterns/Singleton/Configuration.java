public class AppConfig {
    private static AppConfig instance = new AppConfig();
    private Properties config;

    private AppConfig() {
        config = new Properties();
        // load từ file config.properties
    }

    public static AppConfig getInstance() { return instance; }

    public String getValue(String key) { return config.getProperty(key); }
}

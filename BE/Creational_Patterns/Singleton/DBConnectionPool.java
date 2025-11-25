public class DBConnectionPool {
    private static DBConnectionPool instance;
    private List<Connection> pool;

    private DBConnectionPool() {
        // Khởi tạo pool 10 connection
        pool = new ArrayList<>();
    }

    public static synchronized DBConnectionPool getInstance() {
        if(instance == null) instance = new DBConnectionPool();
        return instance;
    }

    public Connection getConnection() { return pool.get(0); } // ví dụ đơn giản
}

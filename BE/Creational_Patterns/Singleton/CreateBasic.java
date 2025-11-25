public class Singleton {
    // 1️⃣ Tạo instance duy nhất và private
    private static Singleton instance = new Singleton();

    // 2️⃣ Constructor private, không ai có thể gọi new Singleton()
    private Singleton() {}

    // 3️⃣ Phương thức public để lấy instance
    public static Singleton getInstance() {
        return instance;
    }

    // 4️⃣ Có thể có 1 hoặc nhiều phương thức
    public void log(String msg) {
        System.out.println("[Singleton] " + msg);
    }
}

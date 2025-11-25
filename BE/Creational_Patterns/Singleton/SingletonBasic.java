public class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
///  chậm
public class SingletonThread {
    private static SingletonThread instance;

    private SingletonThread() {}
    /// chậm synchronized bất đồng bộ toàn method
    public static synchronized SingletonThread getInstance() {
        if (instance == null) {
            instance = new SingletonThread();
        }
        return instance;
    }
}
/// optimal
public class SingletonCheckLocking {
    private static volatile SingletonCheckLocking instance;

    private SingletonCheckLocking() {}

    ///  cách dùng phổ biến nhất
    public static SingletonCheckLocking getInstance() {
        if (instance == null) {
            synchronized (SingletonCheckLocking.class) {
                if (instance == null) {
                    instance = new SingletonCheckLocking();
                }
            }
        }
        return instance;
    }
}
/// Singleton với Static Inner Class
public class SingletonBest {

    private SingletonBest() {}

    private static class Holder {
        private static final SingletonBest INSTANCE = new SingletonBest();
    }

    public static SingletonBest getInstance() {
        return Holder.INSTANCE;
    }
}
///  ENum
public enum SingletonEnum {
    INSTANCE;

    public void doSomething() {
        System.out.println("Do something...");
    }
}

